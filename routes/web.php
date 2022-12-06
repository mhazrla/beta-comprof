<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::prefix('article')->controller(ArticleController::class)->name('article.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('create', 'create')->name('create')->middleware(['auth']);
        Route::post('/store', 'store')->name('store')->middleware(['auth']);
        Route::get('{article}/', 'show')->name('show');
        Route::get('{article}/edit', 'edit')->name('edit')->middleware(['auth']);
        Route::patch('{article}', 'update')->name('update')->middleware(['auth']);
        Route::delete('{article}', 'destroy')->name('destroy')->middleware(['auth']);
    });


Route::get('/contact', function () {
    return Inertia::render('ContactUs');
});

Route::get('/dashboard', [ArticleController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/contact', function () {
    return Inertia::render('ContactUs');
})->name('contact');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
