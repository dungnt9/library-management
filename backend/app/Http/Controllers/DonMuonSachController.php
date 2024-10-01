<?php

namespace App\Http\Controllers;

use App\Models\DonMuonSach;
use App\Models\ChiTietDonMuonSach;
use Illuminate\Http\Request;
use Carbon\Carbon;

class DonMuonSachController extends Controller
{
    public function index(Request $request)
    {
        $maBanDoc = $request->input('ma_ban_doc');
        Log::info('Đang lấy dữ liệu cho mã bạn đọc: ' . $maBanDoc);

        $donMuonSach = DonMuonSach::with('chiTietDonMuonSach.sach.bienMucSach')
            ->where('ma_ban_doc', $maBanDoc)
            ->get();

        Log::info('Dữ liệu trả về: ', $donMuonSach->toArray());

        return response()->json($donMuonSach);
    }

    public function extend(Request $request, $maChiTietDonMuonSach)
    {
        $chiTietDonMuonSach = ChiTietDonMuonSach::findOrFail($maChiTietDonMuonSach);
        $extensionDays = $request->input('extension_days');

        $newReturnDate = Carbon::parse($chiTietDonMuonSach->thoi_gian_tra)->addDays($extensionDays);
        $chiTietDonMuonSach->thoi_gian_tra = $newReturnDate;
        $chiTietDonMuonSach->thoi_gian_gia_han = Carbon::now();
        $chiTietDonMuonSach->save();

        return response()->json(['message' => 'Gia hạn thành công', 'new_return_date' => $newReturnDate]);
    }
}