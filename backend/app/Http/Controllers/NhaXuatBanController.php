<?php
namespace App\Http\Controllers;

use App\Models\NhaXuatBan;
use Illuminate\Http\Request;

class NhaXuatBanController extends Controller
{
    // Lấy tất cả danh mục nhà xuất bản
    public function index()
    {
        return NhaXuatBan::all();
    }

    // Tạo mới một nhà xuất bản
    public function store(Request $request)
    {
        $validated = $request->validate([
            'ten_nha_xuat_ban' => 'required|string|max:255',
            'dia_chi' => 'required|string|max:255',
            'sdt' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'anh' => 'nullable|string',
        ]);

        $nhaXuatBan = NhaXuatBan::create($validated);
        return response()->json($nhaXuatBan, 201);
    }

    // Lấy thông tin một nhà xuất bản
    public function show($id)
    {
        return NhaXuatBan::findOrFail($id);
    }

    // Cập nhật thông tin nhà xuất bản
    public function update(Request $request, $id)
    {
        $nhaXuatBan = NhaXuatBan::findOrFail($id);
        $nhaXuatBan->update($request->all());
        return response()->json($nhaXuatBan, 200);
    }

    // Xóa nhà xuất bản
    public function destroy($id)
    {
        NhaXuatBan::destroy($id);
        return response()->json(null, 204);
    }
}
