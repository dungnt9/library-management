<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BienMucSach extends Model
{
    use HasFactory;

    protected $table = 'bien_muc_sach'; // Tên bảng
    protected $primaryKey = 'ma_bien_muc_sach'; // Khóa chính
    public $timestamps = true; // Sử dụng created_at và updated_at

    protected $fillable = [
        'ma_bien_muc_sach',
        'tieu_de',
        'mo_ta',
        'the_loai',
        'phien_ban',
        'gia_bia',
        'so_trang',
        'anh',
        'ma_nha_xuat_ban',
    ];
}

