<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $article = Article::latest()->with(['tags', 'user', 'category'])->limit(3)->get();

        return Inertia::render('Homepage', [
            'article' => $article
        ]);
    }
}
