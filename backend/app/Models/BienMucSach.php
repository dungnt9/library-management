<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BienMucSach extends Model
{
    use HasFactory;

    protected $table = 'bien_muc_sach'; 
    protected $primaryKey = 'ma_bien_muc_sach';
    public $timestamps = true;

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
