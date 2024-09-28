<?php
namespace App\Http\Controllers;

use App\Models\TacGia;
use Illuminate\Http\Request;

class TacGiaController extends Controller
{
    // Lấy tất cả tác giả
    public function index()
    {
        return TacGia::all();
    }

    // Tạo mới tác giả
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'ten_tac_gia' => 'required|string|max:50',
            'dia_chi' => 'nullable|string|max:100',
            'sdt' => 'nullable|integer',
            'email' => 'nullable|string|email|max:50',
            'anh' => 'nullable|string|max:100',
        ]);

        return TacGia::create($validatedData);
    }

    // Cập nhật thông tin tác giả
    public function update(Request $request, $id)
    {
        $tacGia = TacGia::findOrFail($id);

        $validatedData = $request->validate([
            'ten_tac_gia' => 'required|string|max:50',
            'dia_chi' => 'nullable|string|max:100',
            'sdt' => 'nullable|integer',
            'email' => 'nullable|string|email|max:50',
            'anh' => 'nullable|string|max:100',
        ]);

        $tacGia->update($validatedData);

        return $tacGia;
    }

    // Xóa tác giả
    public function destroy($id)
    {
        $tacGia = TacGia::findOrFail($id);
        $tacGia->delete();

        return response()->json(['message' => 'Tác giả đã được xóa!']);
    }
}
