<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Route;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        

        Route::prefix('api')
            ->middleware('api')
            ->namespace('App\Http\Controllers\UserController') // <---------
            ->group(base_path('routes/api.php'));

   

    }
}
