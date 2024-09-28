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
        $bienMucSach = BienMucSach::create($request->all());
        return response()->json($bienMucSach, 201);
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
