<?php

namespace App\Http\Livewire;

use Livewire\Component;




class About extends Component
{

    public $experiences;
    public $roles;



    public function render()
    {
        return view('livewire.about')->extends('welcome');
    }
}
