<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Post extends Component
{
    public $post;

    public function mount($slug){
        $this->post = BlogPost::where('slug', $slug)->first();
    }

    public function render()
    {
        return view('livewire.post-create')->extends('bloghome')->section('blog-content');
    }
}
