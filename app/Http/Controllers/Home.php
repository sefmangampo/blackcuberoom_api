<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AboutExperience;
use App\Models\ExperienceRoles;

class Home extends Controller
{
    public function index(){   

    }

    public function getExperiences(){

        $res = AboutExperience::orderBy('id','desc')->get(['id','company']);

   
        //$this->roles = ExperienceRoles::get(['role']);


        return $res->toJson();
    }


}
