<?php
use App\Http\Controllers\NhaXuatBanController;
use Illuminate\Support\Facades\Route;

Route::get('/publishers', [NhaXuatBanController::class, 'index']);
