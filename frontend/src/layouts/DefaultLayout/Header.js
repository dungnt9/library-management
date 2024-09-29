import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.name; // Lấy tên từ state nếu có
  const role = location.state?.role; // Lấy vai trò từ state nếu có

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    // Xác nhận đăng xuất
    const confirmLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
      // Xóa thông tin đăng nhập (thay đổi tùy theo cách bạn lưu trữ)
      // Ví dụ: localStorage.removeItem('user');
      navigate('/'); // Chuyển về trang chính sau khi đăng xuất
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1da64c' }}>
      <div className="container-fluid d-flex justify-content-center">
        <img
          src="logo.png"
          className="imgLogo mr-2"
          style={{ width: '300px', height: '50px', marginLeft: '700px' }}
          alt="Logo thư viện"
        />

        <div className="container-fluid d-flex justify-content-end">
          {!username ? ( // Nếu không có username thì hiện nút đăng nhập
            <>
              <Link
                to="/dang_nhap"
                type="button"
                className="btn btn-success mx-1"
                style={{ backgroundColor: '#1da64c', border: 'none', width: '105px' }}
              >
                Đăng nhập
              </Link>
              <Link
                to="/dang_ky"
                type="button"
                className="btn btn-success mx-1"
                style={{ backgroundColor: '#1da64c', border: 'none' }}
              >
                Đăng ký thẻ bạn đọc
              </Link>
            </>
          ) : (
            <>
              {role === 'librarian' ? ( // Nếu là thủ thư
                <>
                  <img
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
                    className="imgLogo mr-2"
                    style={{ width: '50px', height: '50px', marginLeft: '350px' }}
                    alt="LogoUser"
                  />
                  <p className="btn btn-success mx-1" style={{ backgroundColor: '#1da64c', border: 'none' }}>
                    Thủ thư {username}
                  </p>
                </>
              ) : ( // Nếu là bạn đọc
                <>
                  <img
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
                    className="imgLogo mr-2"
                    style={{ width: '50px', height: '50px', marginLeft: '250px' }}
                    alt="LogoUser"
                  />
                  <p className="btn btn-success mx-1" style={{ backgroundColor: '#1da64c', border: 'none' }}>
                    {username}
                  </p>
                </>
              )}
              <button
                onClick={handleLogout}
                className="btn btn-danger mx-1"
                style={{ backgroundColor: '#dc3545', border: 'none' , height:'40px'}}
              >
                Đăng xuất
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
