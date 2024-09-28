<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NhaXuatBan extends Model
{
    // Tên bảng trong CSDL
    protected $table = 'nha_xuat_ban';

    // Khai báo các cột có thể thao tác
    protected $fillable = [
        'ten_nha_xuat_ban',
        'dia_chi',
        'sdt',
        'email',
        'anh'
    ];

    // Khóa chính nếu không phải 'id'
    protected $primaryKey = 'ma_nha_xuat_ban';

    // Nếu bảng không có timestamp (created_at, updated_at), set false
    public $timestamps = true; // Nếu không có timestamps thì đặt false
}
