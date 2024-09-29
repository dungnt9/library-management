<?php

namespace App\Http\Controllers;

use App\Models\TaiKhoan;
use Illuminate\Http\Request;

class TaiKhoanController extends Controller
{
    public function index()
    {
        return TaiKhoan::all();
    }

    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');

        // Kiểm tra thông tin đăng nhập
        $user = TaiKhoan::where('ten_tai_khoan', $credentials['username'])
                        ->where('mat_khau', $credentials['password'])
                        ->first();

        if ($user) {
            return response()->json($user); // Trả về thông tin người dùng
        } else {
            return response()->json(['message' => 'Đăng nhập không thành công!'], 401);
        }
    }


}
