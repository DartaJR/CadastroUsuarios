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

Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');
Route::post('refresh', 'UserController@refresh');
Route::post('logout', 'UserController@logout');
Route::get('users', 'UserController@index');
Route::get('users/{id}', 'UserController@show');
Route::put('users/{id}', 'UserController@update');
Route::delete('users/{id}', 'UserController@delete');

Route::group(['middleware' => 'jwt.auth', 'namespace' => 'Api\\'], function() {

    Route::get('me', 'UserController@me');
});