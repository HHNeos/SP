<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TransportController;
use App\Http\Controllers\VendorController;


Route::post("user-signup", "UserController@userSignUp");
Route::post("user-login", "UserController@userLogin");
Route::get("user/{email}", "UserController@userDetail");


Route::post("admin-signup", "AdminController@adminSignUp");
Route::post("admin-login", "AdminController@adminLogin");
Route::get("admin/{email}", "AdminController@adminDetail");


Route::post("create-transport","TransportController@createTransport");
Route::get("transports", "TransportController@transportsListing");
Route::get("transport/{id}", "TransportController@transportDetail");
Route::delete("transport/{id}", "TransportController@transportDelete");


Route::post("create-vendor","VendorController@createVendor");
Route::get("vendors", "VendorController@vendorsListing");
Route::get("vendor/{id}", "VendorController@vendorDetail");
Route::delete("vendor/{id}", "VendorController@vendorDelete");



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

