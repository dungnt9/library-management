<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NhaXuatBanController;
use App\Http\Controllers\TacGiaController;
use App\Http\Controllers\BienMucSachController;
use App\Http\Controllers\TaiKhoanController;

Route::get('/', function () {
    return view('welcome');
});
Route::group(['prefix' => 'api'], function(){
    Route::get('nha_xuat_ban', [NhaXuatBanController::class, 'index']);
    Route::post('nha_xuat_ban', [NhaXuatBanController::class, 'store']);
    Route::put('nha_xuat_ban/{id}', [NhaXuatBanController::class, 'update']);
    Route::delete('nha_xuat_ban/{id}', [NhaXuatBanController::class, 'destroy']);

    Route::get('tac_gia', [TacGiaController::class, 'index']);
    Route::post('tac_gia', [TacGiaController::class, 'store']);
    Route::put('tac_gia/{id}', [TacGiaController::class, 'update']);
    Route::delete('tac_gia/{id}', [TacGiaController::class, 'destroy']);

    Route::get('bien_muc_sach', [BienMucSachController::class, 'index']);

    Route::post('tai_khoan/login', [TaiKhoanController::class, 'login']);
    Route::get('tai_khoan', [TaiKhoanController::class, 'index']);

});