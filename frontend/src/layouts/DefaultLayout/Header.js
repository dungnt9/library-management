import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../../store/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, isLoggedIn } = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
      dispatch(clearUser());
      navigate('/');
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          {!isLoggedIn ? (
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
            <div className="position-relative" ref={dropdownRef}>
              <div
                className="d-flex align-items-center"
                style={{ cursor: 'pointer' }}
                onClick={toggleDropdown}
              >
                <img
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
                  className="imgLogo mr-2"
                  style={{ width: '50px', height: '50px', marginLeft: userInfo.role === 'librarian' ? '350px' : '250px' }}
                  alt="LogoUser"
                />
                <p className="btn btn-success mx-1" style={{ backgroundColor: '#1da64c', border: 'none' }}>
                  {userInfo.role === 'librarian' ? `Thủ thư ${userInfo.ten_tai_khoan}` : userInfo.ten_tai_khoan}
                </p>
              </div>
              {showDropdown && (
                <div className="position-absolute bg-white rounded shadow-sm" style={{ top: '100%', right: 0, zIndex: 1000 }}>
                  <Link to="/thong-tin-ca-nhan" className="dropdown-item">
                    Thông tin cá nhân
                  </Link>
                  <button onClick={handleLogout} className="dropdown-item text-danger">
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;