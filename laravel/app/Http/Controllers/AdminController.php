<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{

    private $status_code    =        200;

    public function adminSignUp(Request $request) {
        $validator              =        Validator::make($request->all(), [
            "name"              =>          "required",
            "email"             =>          "required|email",
            "password"          =>          "required",
            "phone"             =>          "required"
        ]);

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }

        $name                   =       $request->name;
        $name                   =       explode(" ", $name);
        $first_name             =       $name[0];
        $last_name              =       "";

        if(isset($name[1])) {
            $last_name          =       $name[1];
        }

        $adminDataArray          =       array(
            "first_name"         =>          $first_name,
            "last_name"          =>          $last_name,
            "full_name"          =>          $request->name,
            "email"              =>          $request->email,
            "password"           =>          md5($request->password),
            "phone"              =>          $request->phone
        );

        $admin_status            =           Admin::where("email", $request->email)->first();

        if(!is_null($admin_status)) {
           return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! email already registered"]);
        }

        $admin                   =           Admin::create($adminDataArray);

        if(!is_null($admin)) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", "data" => $admin]);
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }


    // ------------ [ Admin Login ] -------------------
    public function adminLogin(Request $request) {

        $validator          =       Validator::make($request->all(),
            [
                "email"             =>          "required|email",
                "password"          =>          "required"
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }


        // check if entered email exists in db
        $email_status       =       Admin::where("email", $request->email)->first();


        // if email exists then we will check password for the same email

        if(!is_null($email_status)) {
            $password_status    =   Admin::where("email", $request->email)->where("password", md5($request->password))->first();

            // if password is correct
            if(!is_null($password_status)) {
                $admin           =       $this->adminDetail($request->email);

                return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $admin]);
            }

            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }

    // ------------------ [ Admin Detail ] ---------------------
    public function adminDetail($email) {
        $admin               =       array();
        if($email != "") {
            $admin           =       Admin::where("email", $email)->first();
            return $admin;
        }
    }
}