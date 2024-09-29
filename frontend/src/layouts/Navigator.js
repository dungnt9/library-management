import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigator = ({ role }) => {
    const location = useLocation();
    const isActiveLink = (path) => location.pathname === path;

    // Hàm để tạo thuộc tính cho các nút
    const getButtonProps = (path) => ({
        className: "btn btn-success mx-1",
        style: {
            backgroundColor: isActiveLink(path) ? '#67dd3c' : '#1da64c',
            border: 'none',
        },
    });

    // Hàm để render các liên kết dựa trên vai trò
    const renderLinks = () => {
        if (role === 'librarian') {
            return (
                <>
                    <Link to="/" {...getButtonProps('/')}>Trang chủ</Link>
                    <Link to="/gioi_thieu" {...getButtonProps('/gioi_thieu')}>Giới thiệu</Link>
                    <Link to="/ql_danh_muc" {...getButtonProps('/ql_danh_muc')}>Quản lý danh mục</Link>
                    <Link to="/ql_sach" {...getButtonProps('/ql_sach')}>Quản lý sách</Link>
                    <Link to="/ql_ban_doc" {...getButtonProps('/ql_ban_doc')}>Quản lý bạn đọc</Link>
                    <Link to="/ql_muon_tra" {...getButtonProps('/ql_muon_tra')}>Quản lý mượn trả</Link>
                    <Link to="/bao_cao" {...getButtonProps('/bao_cao')}>Báo cáo thống kê</Link>
                    <Link to="/tro_giup" {...getButtonProps('/tro_giup')}>Trợ giúp</Link>
                    <Link to="/lien_he" {...getButtonProps('/lien_he')}>Liên hệ</Link>
                </>
            );
        } else if (role === 'reader') {
            return (
                <>
                    <Link to="/" {...getButtonProps('/')}>Trang chủ</Link>
                    <Link to="/gioi_thieu" {...getButtonProps('/gioi_thieu')}>Giới thiệu</Link>
                    <Link to="/tra_cuu" {...getButtonProps('/tra_cuu')}>Tra cứu</Link>
                    <Link to="/muon_sach" {...getButtonProps('/muon_sach')}>Thông tin mượn sách</Link>
                    <Link to="/tro_giup" {...getButtonProps('/tro_giup')}>Trợ giúp</Link>
                    <Link to="/lien_he" {...getButtonProps('/lien_he')}>Liên hệ</Link>
                </>
            );
        } else {
            return (
                <>
                    <Link to="/" {...getButtonProps('/')}>Trang chủ</Link>
                    <Link to="/gioi_thieu" {...getButtonProps('/gioi_thieu')}>Giới thiệu</Link>
                    <Link to="/tra_cuu" {...getButtonProps('/tra_cuu')}>Tra cứu</Link>
                    <Link to="/tro_giup" {...getButtonProps('/tro_giup')}>Trợ giúp</Link>
                    <Link to="/lien_he" {...getButtonProps('/lien_he')}>Liên hệ</Link>
                </>
            );
        }
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1da64c' }}>
            <div className="container-fluid d-flex justify-content-center">
                {renderLinks()} {/* Gọi hàm để render các liên kết */}
            </div>
        </nav>
    );
};

export default Navigator;
