<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NhaXuatBanController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/publishers', [NhaXuatBanController::class, 'index']);