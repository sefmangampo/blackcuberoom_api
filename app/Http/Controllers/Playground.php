<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Playground extends Controller
{
    public function index(Type $var = null)
    {
        return view('playground');
    }
    
    
}
