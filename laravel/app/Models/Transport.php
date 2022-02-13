<?php

namespace App;
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    protected $fillable = [
        "name", "type", "price", "routes"
    ];

    use HasFactory;
}
