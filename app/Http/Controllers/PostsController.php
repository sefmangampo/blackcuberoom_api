<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogPost;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Image;

class PostsController extends Controller
{
    //
    public function store(Request $request){


  


        $post = new BlogPost;

        $post->slug = Str::slug($request->title);
        $post->title = $request->title;
        $post->content = $request->content;
        
  
     if($request->hasFile('image')){

        $image = $request->file('image');
        $filename = time() . "." . $image->getClientOriginalExtension();
        $location = public_path('images/' . $filename);

        Image::make($image)->resize(500,null, function($constraint){
            $constraint->aspectRatio();
        })->save($location);

        $post->image = $filename;
    }
        $d = date('Y-m-d h:i:s', strtotime($request->date));
        $post->publishdate = $d;
        $post->save();

        return response()->json($post, 201);

    }

    public function show(BlogPost $blogPost){
        return $blogPost;
    }

    public function index(){
        return BlogPost::all();
    }

    public function update(Request $request, BlogPost $blogPost){
        $blogPost->update($request->all());

        return response()->json($blogPost, 200);
    }

    public function delete(BlogPost $blogPost){
        $blogPost->delete();

        return response()->json(null, 204);
    }
}
