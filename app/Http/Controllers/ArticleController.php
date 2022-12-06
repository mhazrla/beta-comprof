<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Http\Requests\ArticleUpdateRequest;
use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function dashboard(User $user)
    {
        $articles = Article::where('user_id', auth()->user()->id)->latest()->with(['tags', 'category'])->get();


        return Inertia::render('Dashboard', [
            'article' => $articles,
            'user' => $user
        ]);
    }

    public function index()
    {
        $article = Article::latest()->with(['tags', 'user', 'category'])->get();

        return Inertia::render('Article/Index', [
            'article' => $article
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $categories = Category::all();
        $tags = Tag::all();

        return Inertia::render('Article/Create', [
            'category' => $categories,
            'tags' => $tags
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticleRequest $request)
    {

        $validatedData = $request->validated();

        $tags = explode('#', $request->tags);

        if ($request->has('img')) {
            $validatedData['img'] = $request->file('img')->store('article');
        }

        $article = $request->user()->articles()->create($validatedData + [
            'user_id' => auth()->user()->email,
        ]);

        foreach ($tags as $tagName) {
            $tag = Tag::firstOrCreate(['name' => $tagName]);
            $article->tags()->attach($tag);
        }

        return to_route('dashboard')->with('message', 'Article Berhasil Ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $article = Article::where('id', $id)->with(['tags', 'category'])->get();

        return Inertia::render(
            'Article/Detail',
            [
                'article' => $article,
            ]
        );;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        $tags = $article->tags->implode('name', '#');
        $category = Category::all();
        return Inertia::render('Article/Create', [
            'article' => $article,
            'tags' => $tags,
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ArticleUpdateRequest $request, Article $article)
    {
        $tags = explode('#', $request->tags);

        if ($request->hasFile('img')) {
            !is_null($article->img) && Storage::delete($article->img);
            $article->img = $request->file('img')->store('article');
        }

        $article->update($request->validated() + [
            'img' => $article->img,
        ]);

        $newTags = [];

        foreach ($tags as $tagName) {
            $tag = Tag::firstOrCreate(['name' => $tagName]);
            array_push($newTags, $tag->id);
        }

        $article->tags()->sync($newTags);
        return Redirect::route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        !is_null($article->img) && Storage::delete($article->img);
        $article->tags()->detach();
        $article->delete();

        return Redirect::route('dashboard');
    }
}
