<?php

use Illuminate\Support\Facades\Route;

// use App\Http\Controllers\UserController;

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

// Route::post("user-signup", "UserController@userSignUp");

// Route::post("user-login", "UserController@userLogin");

// Route::get("user/{email}", "UserController@userDetail");

Route::get('/', function () {
    return view('welcome');
});
