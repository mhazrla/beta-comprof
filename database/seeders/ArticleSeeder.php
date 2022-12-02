<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = Category::factory()->create();
        $user = User::factory()->create();
        $tags = Tag::factory()->count(3)->create();

        $article = Article::factory()
            ->count(3)
            ->for($category)
            ->for($user)
            ->hasAttached($tags)
            ->create();
    }
}
