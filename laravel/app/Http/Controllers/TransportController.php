<?php

namespace App\Http\Controllers;
use App\Models\Transport;
//use App\Transport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class TransportController extends Controller
{
    private $status     =   200;
    // --------------- [ Save Transport function ] -------------
    public function createTransport(Request $request) {

        // validate inputs
        $validator          =       Validator::make($request->all(),
            [
                "name"        =>      "required",
                "type"         =>      "required",
                "price"             =>      "required",
                "routes"             =>      "required"
            ]
        );

        // if validation fails
        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_errors" => $validator->errors()]);
        }

        $transport_id             =       $request->id;
         $transportArray           =       array(
            "name"            =>      $request->name,
            "type"             =>      $request->type,
            "price"                 =>      $request->price,
            "routes"                 =>      $request->routes
        );

        if($transport_id !="") {           
            $transport              =         Transport::find($transport_id);
            if(!is_null($transport)){
                $updated_status     =       Transport::where("id", $transport_id)->update($transportArray);
                if($updated_status == 1) {
                    return response()->json(["status" => $this->status, "success" => true, "message" => "transport detail updated successfully"]);
                }
                else {
                    return response()->json(["status" => "failed", "message" => "Whoops! failed to update, try again."]);
                }               
            }                   
        }

        else {
            $transport        =       Transport::create($transportArray);
            if(!is_null($transport)) {            
                return response()->json(["status" => $this->status, "success" => true, "message" => "transport record created successfully", "data" => $transport]);
            }    
            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! failed to create."]);
            }
        }        
    }

    // --------------- [ transport Listing ] -------------------
    public function transportsListing() {
        $transports       =       Transport::all();
        if(count($transports) > 0) {
            return response()->json(["status" => $this->status, "success" => true, "count" => count($transports), "data" => $transports]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no record found"]);
        }
    }

    // --------------- [ transport Detail ] ----------------
    public function transportDetail($id) {
        $transport        =       Transport::find($id);
        if(!is_null($transport)) {
            return response()->json(["status" => $this->status, "success" => true, "data" => $transport]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no transport found"]);
        }
    }
//---------------- [ Delete transport ] ----------
    public function transportDelete($id) {
        $transport        =       Transport::find($id);
        if(!is_null($transport)) {
            $delete_status      =       Transport::where("id", $id)->delete();
            if($delete_status == 1) {
                return response()->json(["status" => $this->status, "success" => true, "message" => "transport record deleted successfully"]);
            }
            else{
                return response()->json(["status" => "failed", "message" => "failed to delete, please try again"]);
            }
        }
        else {
            return response()->json(["status" => "failed", "message" => "Whoops! no student found with this id"]);
        }
    }

}