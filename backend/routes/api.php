<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Customer\CustomerProductController;
use App\Http\Controllers\Customer\ReviewController;
use App\Http\Controllers\Customer\OrderController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\CatagoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\AdminController;
use App\Http\Middleware\Admin;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([], function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/products', [CustomerProductController::class, 'index'])->name('customer.product.home');
    Route::get('/products/{product}', [CustomerProductController::class, 'show'])->name('customer.product.show');
    Route::post('/products/{product}/reviews', [ReviewController::class, 'store'])->name('customer.product.reviews');
    Route::get('/orders', [OrderController::class, 'index'])->name('customer.order.home');
    Route::get('/orders/shipping', [OrderController::class, 'shipping'])->name('customer.order.shipping');
    Route::post('/orders/shipping/{order}', [OrderController::class, 'shippingSave'])->name('customer.order.shipping.save');
    Route::get('/orderpopup', [OrderController::class, 'popup'])->name('customer.order.popup');
    Route::post('/orders/{product}', [OrderController::class, 'add'])->name('customer.order.add');
    Route::get('/orders/checkout', [OrderController::class, 'checkoutpage'])->name('customer.order.checkoutpage');
    Route::post('/orders/checkout/{order}', [OrderController::class, 'checkout'])->name('customer.order.checkout');
    Route::get('/history', [OrderController::class, 'history'])->name('customer.order.history');
    Route::get('/history/{order}', [OrderController::class, 'orderdetail'])->name('customer.order.orderdetail');
    // Route::get('/order/cart', [OrderController::class, 'itemCount'])->name('customer.order.cart');

});
