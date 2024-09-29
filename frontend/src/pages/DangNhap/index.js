import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

function DangNhap() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Khởi tạo dispatch

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/api/tai_khoan/login', {
            username,
            password,
        });

        if (response.status === 200) {
            const userData = response.data; // Giả sử bạn nhận được thông tin người dùng từ API
            dispatch(setUser(userData)); // Lưu thông tin người dùng vào Redux store
            alert(`Xin chào ${userData.ten_tai_khoan}!`);
            navigate('/'); // Chuyển hướng đến trang chính
        } else {
            alert('Đăng nhập không thành công!');
        }
    } catch (error) {
        console.error(error); 
        alert('Đăng nhập không thành công! Vui lòng kiểm tra lại tên tài khoản hoặc mật khẩu.');
    }
};


  return (
    <section className="vh-100" style={{ height: '30px', marginTop: '10px' }}>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://png.pngtree.com/png-vector/20220923/ourmid/pngtree-green-leaf-icon-vector-png-image_6209655.png"
              className="img-fluid"
              alt="Sample"
              style={{ width: '400px', height: '400px' }}
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{ marginLeft: '-150px' }}>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start" style={{ marginBottom: '20px' }}>
                <p className="lead fw-normal mb-0 me-3" style={{ fontWeight: 'bold' }}>Đăng nhập</p>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Nhập tên tài khoản"
                />
                <label className="form-label" htmlFor="form3Example3">Tên tài khoản</label>
              </div>

              <div data-mdb-input-init className="form-outline mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Nhập mật khẩu"
                />
                <label className="form-label" htmlFor="form3Example4">Mật khẩu</label>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: '2.5rem',
                    paddingRight: '2.5rem',
                    backgroundColor: 'rgb(70, 195, 61)',
                    border: 'NONE',
                  }}
                >
                  Đăng nhập
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Ban chưa có tài khoản?{' '}
                  <a href="\dang_ky" className="link-danger">Đăng ký thẻ bạn đọc</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DangNhap;
