<?php
namespace App;
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $fillable = [
        "name", "address", "route", "email", "phone"
    ];
    
    use HasFactory;
}
