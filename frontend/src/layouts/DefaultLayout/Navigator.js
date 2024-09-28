import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigator = () => {
    const location = useLocation();
    const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1da64c' }}>
        <div className="container-fluid d-flex justify-content-center">
          <Link
            to="/"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Trang chủ
          </Link>
          <Link
            to="/gioi_thieu"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/gioi_thieu') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Giới thiệu
          </Link>
          <Link
            to="/tra_cuu"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/tra_cuu') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Tra cứu
          </Link>
          {/* <Link
            to="/muon_sach"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/muon_sach') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Thông tin mượn sách
          </Link> */}
          <Link
            to="/ql_danh_muc"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/ql_danh_muc') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Quản lý danh mục
          </Link>
          <Link
            to="/ql_sach"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/ql_sach') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Quản lý sách
          </Link>
          <Link
            to="/ql_ban_doc"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/ql_ban_doc') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Quản lý bạn đọc
          </Link>
          <Link
            to="/ql_muon_tra"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/ql_muon_tra') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Quản lý mượn trả
          </Link>

          <Link
            to="/bao_cao"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/bao_cao') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Báo cáo thống kê
          </Link>

          <Link
            to="/tro_giup"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/tro_giup') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Trợ giúp
          </Link>
          <Link
            to="/lien_he"
            type="button"
            className="btn btn-success mx-1"
            style={{
              backgroundColor: isActiveLink('/lien_he') ? '#67dd3c' : '#1da64c',
              border: 'none',
            }}
          >
            Liên hệ
          </Link>
        </div>
      </nav>
  );
};

export default Navigator;
