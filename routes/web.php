<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\HelloWorldController;

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


Route::get('/', [WelcomeController::class, 'index'])->name('welcome.index');


Route::middleware('auth', 'verified')->group(function(){
    Route::resource('products', 'ProductController');

Route::get('/users/list', [UsersController::class, 'index'])->middleware('auth');
Route::delete('/users/{user}', [UsersController::class, 'destroy'])->middleware('auth');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

});

// Route::get('/products', [ProductController::class, 'index'])->name('products.index')->middleware('auth');
// Route::get('/products/create', [ProductController::class, 'create'])->name('products.create')->middleware('auth');
// Route::post('/products', [ProductController::class, 'store'])->name('products.store')->middleware('auth');
// Route::get('/products/edit/{product}', [ProductController::class, 'edit'])->name('products.edit')->middleware('auth');
// Route::post('/products/{product}', [ProductController::class, 'update'])->name('products.update')->middleware('auth');
// Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy')->middleware('auth');
// Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show')->middleware('auth');


Route::get('/hello', [HelloWorldController::class, 'show']);

Auth::routes(['verify' => true]);
