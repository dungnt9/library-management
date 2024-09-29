<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaiKhoan extends Model
{
    // Tên bảng trong CSDL
    protected $table = 'tai_khoan';

    // Khai báo các cột có thể thao tác
    protected $fillable = [
        'mat_khau',
        'quyen',
        'trang_thai'
    ];

    // Khóa chính nếu không phải 'id'
    protected $primaryKey = 'ma_tai_khoan';

    // Nếu bảng không có timestamp (created_at, updated_at), set false
    public $timestamps = true; // Nếu không có timestamps thì đặt false
}
