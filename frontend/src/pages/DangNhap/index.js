import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function DangNhap() {
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
            <form>
              <div
                className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
                style={{ marginBottom: '20px' }}
              >
                <p className="lead fw-normal mb-0 me-3" style={{ fontWeight: 'bold' }}>
                  Đăng nhập
                </p>
              </div>

              {/* <!-- Email input --> */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Nhập tên tài khoản"
                />
                <label className="form-label" for="form3Example3">
                  Tên tài khoản
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div data-mdb-input-init className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Nhập mật khẩu"
                />
                <label className="form-label" for="form3Example4">
                  Mật khẩu
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" for="form2Example3">
                    Ghi nhớ tôi
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Quên mật khẩu?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
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
                  <a href="#!" className="link-danger">
                    Đăng ký thẻ bạn đọc
                  </a>
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
