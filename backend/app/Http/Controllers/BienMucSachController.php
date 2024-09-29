<?php

namespace App\Http\Controllers;

use App\Models\BienMucSach;
use Illuminate\Http\Request;

class BienMucSachController extends Controller
{
    // Hiển thị danh sách biên mục sách
    public function index()
    {
        return BienMucSach::all();
    }

    // Tạo mới biên mục sách
    public function store(Request $request)
    {   
    // Kiểm tra xem mã biên mục sách có được nhập hay không
    $request->validate([
        'ma_bien_muc_sach' => 'required|string|max:255', // Thêm validation cho mã biên mục
        'tieu_de' => 'required|string|max:255',
        'mo_ta' => 'nullable|string',
        'the_loai' => 'nullable|string|max:255',
        'phien_ban' => 'nullable|string|max:255',
        'gia_bia' => 'required|numeric',
        'so_trang' => 'required|integer',
        'anh' => 'nullable|string|max:255',
        'ma_nha_xuat_ban' => 'required|integer',
    ]);

    // Tạo bản ghi mới với mã biên mục được nhập từ request
    $bienMucSach = BienMucSach::create($request->all());

    return response()->json($bienMucSach);
    }


    // Hiển thị thông tin biên mục sách
    public function show($id)
    {
        return BienMucSach::findOrFail($id);
    }

    // Cập nhật biên mục sách
    public function update(Request $request, $id)
    {
        $bienMucSach = BienMucSach::findOrFail($id);
        $bienMucSach->update($request->all());
        return response()->json($bienMucSach, 200);
    }

    // Xóa biên mục sách
    public function destroy($id)
    {
        BienMucSach::destroy($id);
        return response()->json(null, 204);
    }
}
