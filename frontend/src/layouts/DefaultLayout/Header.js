import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

const Header = () => {

    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

  return (
    <div>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1da64c' }}>
        <div className="container-fluid d-flex justify-content-center">
          <img
            src="logo.png"
            className="imgLogo mr-2"
            style={{ width: '300px', height: '50px', marginLeft: '700px' }}
            alt="Logo thư viện"
          />

          <div className="container-fluid d-flex justify-content-end">
            <Link
              to="/dang_nhap"
              type="button"
              className="btn btn-success mx-1"
              style={{ backgroundColor: '#1da64c', border: 'none', width: '105px' }}
            >
              Đăng nhập
            </Link>
            <Button
              type="button"
              className="btn btn-success mx-1"
              style={{ backgroundColor: '#1da64c', border: 'none' }}
              onClick={handleShow}
            >
              Đăng ký thẻ bạn đọc
            </Button>
            {/* <img
              src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
              className="imgLogo mr-2"
              style={{ width: '50px', height: '50px', marginLeft: '250px' }}
              alt="LogoUser"
            />

            <p type="button" className="btn btn-success mx-1" style={{ backgroundColor: '#1da64c', border: 'none' }}>
              Nguyễn Tiến Dũng
            </p> */}

            {/* <img
              src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
              className="imgLogo mr-2"
              style={{ width: '50px', height: '50px', marginLeft: '350px' }}
              alt="LogoUser"
            />

            <p type="button" className="btn btn-success mx-1" style={{ backgroundColor: '#1da64c', border: 'none' }}>
              Thủ thư Nguyễn Văn A
            </p> */}
          </div>
        </div>
    </nav>
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng ký thẻ bạn đọc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="d-flex flex-wrap">
              <Form.Group className="mb-3" controlId="formFirstName" style={{ flex: '1 1 45%', marginRight: '10px' }}>
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control type="text" placeholder="Nhập họ và tên" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName" style={{ flex: '1 1 45%' }}>
                <Form.Label>Số căn cước</Form.Label>
                <Form.Control type="text" placeholder="Nhập số căn cước" />
              </Form.Group>
            </div>
            <div className="d-flex flex-wrap">
              <Form.Group
                className="mb-3"
                controlId="formBirthdayDate"
                style={{ flex: '1 1 45%', marginRight: '10px' }}
              >
                <Form.Label>Ngày sinh</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3" style={{ flex: '1 1 45%' }}>
                <Form.Label>Giới tính</Form.Label>
                <div>
                  <Form.Check inline label="Nam" type="radio" name="gender" id="maleGender" value="Nam" />
                  <Form.Check
                    inline
                    label="Nữ"
                    type="radio"
                    name="gender"
                    id="femaleGender"
                    value="Nữ"
                    defaultChecked
                  />
                  <Form.Check inline label="Khác" type="radio" name="gender" id="otherGender" value="Khác" />
                </div>
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formUploadPhoto">
              <Form.Label>Upload Ảnh</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <div className="d-flex flex-wrap">
              <Form.Group className="mb-3" controlId="formWorkUnit" style={{ flex: '1 1 45%', marginRight: '10px' }}>
                <Form.Label>Đơn vị công tác</Form.Label>
                <Form.Control type="text" placeholder="Nhập đơn vị công tác" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formWorkAddress" style={{ flex: '1 1 45%' }}>
                <Form.Label>Địa chỉ cơ quan</Form.Label>
                <Form.Control type="text" placeholder="Nhập địa chỉ cơ quan" />
              </Form.Group>
            </div>
            <div className="d-flex flex-wrap">
              <Form.Group className="mb-3" controlId="formHomeAddress" style={{ flex: '1 1 45%', marginRight: '10px' }}>
                <Form.Label>Địa chỉ nhà riêng</Form.Label>
                <Form.Control type="text" placeholder="Nhập địa chỉ nhà riêng" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail" style={{ flex: '1 1 45%' }}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Nhập email" />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control type="tel" placeholder="Nhập số điện thoại" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Nộp đơn đăng ký thẻ bạn đọc
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    

      
  );
};

export default Header;
