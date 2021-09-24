<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Playground;
use App\Http\Controllers\Resources;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\Login;

use App\Http\Livewire\PostCreate;
use App\Http\Livewire\Home;
use App\Http\Livewire\About;
use App\Http\Livewire\Blog;
use App\Http\Livewire\WritePost;

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
    // Route::get('/login',  [ App\Http\Controllers\Login::class,'index'])->name('login');
   
    Route::get('/write', Livewire\WritePost::Class)->name('write');
    Route::get('/',Livewire\Home::Class);
    
    Route::get('/experiences', [App\Http\Controllers\Resources::class,'getExperiences' ]);
    Route::get('/roles', [App\Http\Controllers\Resources::class,'getRoles' ]);
    Route::get('/about',Livewire\About::Class);

    Route::get('/blog', Livewire\Blog::Class);

    Route::get('/post',  [App\Http\Controllers\PostsController::class,'index']);
    Route::get('/post/{blogPost}',  [App\Http\Controllers\PostsController::class,'show']);
    Route::post('/post',  [App\Http\Controllers\PostsController::class,'store']);
    Route::put('/post/{blogPost}',  [App\Http\Controllers\PostsController::class,'update']);
    Route::delete('/post/{blogPost}',  [App\Http\Controllers\PostsController::class,'delete']);

    Route::get('blog/post/{slug}',  Livewire\Post::Class);
    Route::get('/playground', [App\Http\Controllers\Playground::Class, 'index']);
});

// Route::middleware(['auth:sanctum', 'cache.headers:public;max_age=2628000;etag'])->group(function () {
//    
// });
