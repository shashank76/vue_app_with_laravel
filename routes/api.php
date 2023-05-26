<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('api')->group(function () {
    Route::resource('post', PostController::class);
});
Route::middleware('api')->group(function () {
    Route::resource('category', CategoryController::class);
});
Route::middleware('api')->group(function () {
    Route::resource('product', ProductController::class);
});