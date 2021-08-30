<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Playground;
use App\Http\Controllers\Blog;
use App\Http\Livewire\PostCreate;
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

Route::middleware('cache.headers:public;max_age=2628000;etag')->group(function () {
    Route::get('/', function () {
        return view('home');
    });
    

    Route::get('/about', function () {
        return view('about');
    });

    Route::get('/blog', function(){
        return view('bloghome');
    });

    Route::get('post/create',  Livewire\PostCreate::Class);
    Route::get('post/{slug}',  Livewire\Post::Class);


    Route::get('/playground', [Controllers\Playground::Class, 'index']);
});


