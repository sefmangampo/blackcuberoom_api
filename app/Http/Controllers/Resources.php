<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AboutExperience;
use App\Models\ExperienceRoles;

class Resources extends Controller
{
    public function getExperiences(){

        $res = AboutExperience::orderBy('id','desc')->get(['id','company','jobtitle','company','dateofwork','location']);

        return $res->toJson();
    }

    public function getRoles(){
        $res = ExperienceRoles::orderBy('id','desc')->get(['id','companyid','role']);

        return $res->toJson();
    }
}
