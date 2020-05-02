<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'product', 'middleware' => 'cors'], function(){
    Route::post('', 'Api\ProductController@store');
    Route::get('', 'Api\ProductController@index');
    Route::get('{id}', 'Api\ProductController@show');
    Route::put('{id}', 'Api\ProductController@update');
    Route::delete('{id}', 'Api\ProductController@destroy');
});
