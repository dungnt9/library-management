<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NhaXuatBan; // Đảm bảo bạn đã import Model

class NhaXuatBanController extends Controller
{
    public function index()
    {
        $publishers = NhaXuatBan::all(); // Lấy tất cả nhà xuất bản
        return response()->json($publishers);
    }
}
