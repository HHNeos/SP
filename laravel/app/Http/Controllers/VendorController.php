<?php

namespace App\Http\Controllers;
use App\Models\Vendor;
//use App\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class VendorController extends Controller
{
    private $status     =   200;
    // --------------- [ Save Vendor function ] -------------
    public function createVendor(Request $request) {

        // validate inputs
        $validator          =       Validator::make($request->all(),
            [
                "name"        =>      "required",
                "address"         =>      "required",
                "route"         =>      "required",
                "email"             =>      "required|email",
                "phone"             =>      "required|numeric"
            ]
        );

        // if validation fails
        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_errors" => $validator->errors()]);
        }

        $vendor_id             =       $request->id;
         $vendorArray           =       array(
            "name"            =>      $request->name,
            "address"             =>      $request->address,
            "route"             =>      $request->name . " " . $request->address,
            "email"                 =>      $request->email,
            "phone"                 =>      $request->phone
        );

        if($vendor_id !="") {           
            $vendor              =         Vendor::find($vendor_id);
            if(!is_null($vendor)){
                $updated_status     =       Vendor::where("id", $vendor_id)->update($vendorArray);
                if($updated_status == 1) {
                    return response()->json(["status" => $this->status, "success" => true, "message" => "vendor detail updated successfully"]);
                }
                else {
                    return response()->json(["status" => "failed", "message" => "Whoops! failed to update, try again."]);
                }               
            }                   
        }

        else {
            $vendor        =       Vendor::create($vendorArray);
            if(!is_null($vendor)) {            
                return response()->json(["status" => $this->status, "success" => true, "message" => "vendor record created successfully", "data" => $vendor]);
            }    
            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! failed to create."]);
            }
        }        
    }

    // --------------- [ vendors Listing ] -------------------
    public function vendorsListing() {
        $vendors       =       Vendor::all();
        if(count($vendors) > 0) {
            return response()->json(["status" => $this->status, "success" => true, "count" => count($vendors), "data" => $vendors]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no record found"]);
        }
    }

    // --------------- [ Vendor Detail ] ----------------
    public function vendorDetail($id) {
        $vendor        =       Vendor::find($id);
        if(!is_null($vendor)) {
            return response()->json(["status" => $this->status, "success" => true, "data" => $vendor]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no vendor found"]);
        }
    }
//---------------- [ Delete Vendor ] ----------
    public function vendorDelete($id) {
        $vendor        =       Vendor::find($id);
        if(!is_null($vendor)) {
            $delete_status      =       Vendor::where("id", $id)->delete();
            if($delete_status == 1) {
                return response()->json(["status" => $this->status, "success" => true, "message" => "vendor record deleted successfully"]);
            }
            else{
                return response()->json(["status" => "failed", "message" => "failed to delete, please try again"]);
            }
        }
        else {
            return response()->json(["status" => "failed", "message" => "Whoops! no student found with this id"]);
        }
    }

    /*
        used in transport-detail to show all the vendors
    */
    /*public function allvendors(){
        $vendor = Vendor::where('status','0')->get();
        return response()->json([
            'status'=>200,
            'vendor'=>$vendor,

        ]);
    }*/
}