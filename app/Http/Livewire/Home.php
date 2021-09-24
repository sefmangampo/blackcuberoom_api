<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\ContactDetails;
use App\Models\AboutSkills;
use App\Models\AboutExperience;
use App\Models\PlayGroundProjects;


class Home extends Component
{

    public $details;
    public $skills;
    public $exps;
    public $playgrounds;

    public function render()
    {

        $this->playgrounds = PlayGroundProjects::all();
        $this->details = ContactDetails::first();
        $this->skills = AboutSkills::all();
        $this->exps = AboutExperience::orderBy('id','desc')->get();

        return view('livewire.home')->extends('welcome');
    }
}
