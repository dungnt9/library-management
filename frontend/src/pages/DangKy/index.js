import React from 'react';
import { Button, Form } from 'react-bootstrap';

const DangKy = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Đăng ký thẻ bạn đọc thành công");
  };

  return (
    <div className="container">
      <h2 style={{textAlign:'center', color:'green', paddingTop:'10px'}}>Đăng ký thẻ bạn đọc</h2>
      <Form onSubmit={handleSubmit}>
        <div className="d-flex flex-wrap">
          <Form.Group className="mb-3" controlId="formFirstName" style={{ flex: '1 1 45%', marginRight: '10px' }}>
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control type="text" placeholder="Nhập họ và tên" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName" style={{ flex: '1 1 45%' }}>
            <Form.Label>Số căn cước</Form.Label>
            <Form.Control type="text" placeholder="Nhập số căn cước" required />
          </Form.Group>
        </div>
        <div className="d-flex flex-wrap">
          <Form.Group
            className="mb-3"
            controlId="formBirthdayDate"
            style={{ flex: '1 1 45%', marginRight: '10px' }}
          >
            <Form.Label>Ngày sinh</Form.Label>
            <Form.Control type="date" required />
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
            <Form.Control type="text" placeholder="Nhập đơn vị công tác" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formWorkAddress" style={{ flex: '1 1 45%' }}>
            <Form.Label>Địa chỉ cơ quan</Form.Label>
            <Form.Control type="text" placeholder="Nhập địa chỉ cơ quan" required />
          </Form.Group>
        </div>
        <div className="d-flex flex-wrap">
          <Form.Group className="mb-3" controlId="formHomeAddress" style={{ flex: '1 1 45%', marginRight: '10px' }}>
            <Form.Label>Địa chỉ nhà riêng</Form.Label>
            <Form.Control type="text" placeholder="Nhập địa chỉ nhà riêng" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail" style={{ flex: '1 1 45%' }}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Nhập email" required />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control type="tel" placeholder="Nhập số điện thoại" required />
        </Form.Group>
        <Button variant="primary" type="submit" style={{
                    paddingLeft: '2.5rem',
                    paddingRight: '2.5rem',
                    backgroundColor: 'rgb(70, 195, 61)',
                    border: 'NONE',
                  }}>
          Nộp đơn đăng ký thẻ bạn đọc
        </Button>
      </Form>
    </div>
  );
};

export default DangKy;
