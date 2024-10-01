<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DonMuonSach extends Model
{
    protected $table = 'don_muon_sach';
    protected $primaryKey = 'ma_don_muon_sach';
    public $timestamps = true;

    protected $fillable = [
        'trang_thai',
        'thoi_gian_muon',
        'ma_ban_doc'
    ];

    public function chiTietDonMuonSach()
    {
        return $this->hasMany(ChiTietDonMuonSach::class, 'ma_don_muon_sach', 'ma_don_muon_sach');
    }

    public function banDoc()
    {
        return $this->belongsTo(BanDoc::class, 'ma_ban_doc', 'ma_ban_doc');
    }
}