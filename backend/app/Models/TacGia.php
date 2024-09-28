<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TacGia extends Model
{
    // Tên bảng trong CSDL
    protected $table = 'tac_gia';

    // Khai báo các cột có thể thao tác
    protected $fillable = [
        'ten_tac_gia',
        'dia_chi',
        'sdt',
        'email',
        'anh'
    ];

    // Khóa chính nếu không phải 'id'
    protected $primaryKey = 'ma_tac_gia';

    // Nếu bảng không có timestamp (created_at, updated_at), set false
    public $timestamps = true; // Nếu không có timestamps thì đặt false
}
