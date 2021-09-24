<?php

namespace App\Http\Livewire;

use Livewire\WithPagination;
use Livewire\Component;
use App\Models\BlogPost;

class Blog extends Component
{

    use WithPagination;



    public function render()
    {
        return view('livewire.blog',[
            'posts' => BlogPost::orderByDesc('id')->paginate(5),
        ]);
    }
}
