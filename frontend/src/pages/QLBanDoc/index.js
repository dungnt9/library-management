import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

function QLBanDoc() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showExtendModal, setShowExtendModal] = useState(false);
  const [showChangeCardModal, setShowChangeCardModal] = useState(false);
  const [showReaderInfo, setShowReaderInfo] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentReader, setCurrentReader] = useState(null);
  const [showPending, setShowPending] = useState(false);
  const [filters, setFilters] = useState({ maBanDoc: '', hoTen: '', ngayDangKy: '' });
  const [activeButton, setActiveButton] = useState('Thông tin bạn đọc');
  const [extendMonths, setExtendMonths] = useState(0);
  const [changeCardReason, setChangeCardReason] = useState('');
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleShowReaderInfo = () => {
    setActiveButton('Thông tin bạn đọc'); // Cập nhật activeButton
    setShowReaderInfo(true); // Hiển thị bảng thông tin bạn đọc
    setShowPending(false); // Ẩn bảng đơn đăng ký
  };

  const handleShowPending = () => {
    setActiveButton('Đơn đăng ký thẻ bạn đọc đang chờ');
    setShowPending(true); // Hiển thị bảng đơn đăng ký
    setShowReaderInfo(false); // Ẩn bảng thông tin bạn đọc
  };

  const handleCancelShow = (reader) => {
    setCurrentReader(reader);
    setShowCancelModal(true);
  };

  const handleShow = () => {
    setActiveButton('Tạo tài khoản bạn đọc');
    setShowModal(true);
  };

  const handleEditShow = () => {
    setActiveButton('Chỉnh sửa thông tin bạn đọc');
    setShowEditModal(true);
  };

  const handleEditClose = () => {
    setShowEditModal(false);
    setEditMode(false);
    setCurrentReader(null);
  };

  const handleEdit = (reader) => {
    setCurrentReader(reader);
    setEditMode(true);
    handleEditShow();
  };

  const handleView = (reader) => {
    setCurrentReader(reader);
    handleShow();
  };

  const handleCancelCard = () => {
    console.log('Hủy thẻ');
  };

  const readers = [
    { id: '1', maBanDoc: 'BD0061', hoTen: 'Nguyễn Văn A', ngayDangKy: '2023-01-05' },
    { id: '2', maBanDoc: 'BD0062', hoTen: 'Trần Thị B', ngayDangKy: '2023-02-10' },
    { id: '3', maBanDoc: 'BD0063', hoTen: 'Lê Văn C', ngayDangKy: '2023-03-15' },
  ];

  const pendingReaders = [
    { id: '1', tenBanDoc: 'Nguyễn Văn A', soCanCuoc: '123456789', soDienThoai: '0987654321' },
    { id: '2', tenBanDoc: 'Trần Thị B', soCanCuoc: '987654321', soDienThoai: '0912345678' },
    { id: '3', tenBanDoc: 'Nguyễn Văn A', soCanCuoc: '123456789', soDienThoai: '0987654321' },

    // Add more pending readers as needed
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredReaders = readers.filter((reader) => {
    return (
      reader.maBanDoc.toLowerCase().includes(filters.maBanDoc.toLowerCase()) &&
      reader.hoTen.toLowerCase().includes(filters.hoTen.toLowerCase()) &&
      reader.ngayDangKy.includes(filters.ngayDangKy)
    );
  });
  const handleExtendCard = (reader) => {
    setCurrentReader(reader);
    setShowExtendModal(true);
  };

  const handleChangeCard = (reader) => {
    setCurrentReader(reader);
    setShowChangeCardModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    setShowEditModal(false);
    setShowExtendModal(false);
    setShowChangeCardModal(false);
    setEditMode(false);
    setCurrentReader(null);
  };

  return (
    <div>
      <button
        className="btn my-3"
        onClick={handleShowReaderInfo} // Gọi hàm để hiển thị thông tin bạn đọc
        style={{
          marginLeft: '13.889vw',
          backgroundColor: activeButton === 'Thông tin bạn đọc' ? 'green' : 'white',
          color: activeButton === 'Thông tin bạn đọc' ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Thông tin bạn đọc
      </button>
      
      <button
        className="btn my-3"
        onClick={handleShow}
        style={{
          marginLeft: '10px',
          backgroundColor: activeButton === 'Tạo tài khoản bạn đọc' ? 'green' : 'white',
          color: activeButton === 'Tạo tài khoản bạn đọc' ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Tạo tài khoản bạn đọc
      </button>
      <button
        className="btn my-3"
        onClick={handleShowPending}
        style={{
          marginLeft: '10px',
          backgroundColor: activeButton === 'Đơn đăng ký thẻ bạn đọc đang chờ' ? 'green' : 'white',
          color: activeButton === 'Đơn đăng ký thẻ bạn đọc đang chờ' ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Đơn đăng ký thẻ bạn đọc đang chờ
      </button>
      
      <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw' }}>
        {showPending ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ width: '10%' }}>
                  Mã bạn đọc
                </th>
                <th scope="col">Tên bạn đọc</th>
                <th scope="col">Số căn cước</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col" style={{ width: '15%' }}>
                  Hành động
                </th>
              </tr>
              <tr>
                <th>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lọc"
                      name="theLoai"
                      onChange={(e) => handleFilterChange(e, 'books')}
                    />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lọc"
                      name="createdAt"
                      onChange={(e) => handleFilterChange(e, 'books')}
                    />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lọc"
                      name="updated"
                      onChange={(e) => handleFilterChange(e, 'books')}
                    />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lọc"
                      name="nhaXuatBan"
                      onChange={(e) => handleFilterChange(e, 'books')}
                    />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pendingReaders.map((reader, index) => (
                <tr key={reader.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{reader.tenBanDoc}</td>
                  <td>{reader.soCanCuoc}</td>
                  <td>{reader.soDienThoai}</td>
                  <td>
                    <button className="btn btn-info btn-sm mx-1" onClick={() => handleView(reader)}>
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="btn btn-primary btn-sm mx-1" onClick={() => handleEdit(reader)}>
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm mx-1">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ width: '10%' }}>
                  Mã bạn đọc
                </th>
                <th scope="col">Họ tên</th>
                <th scope="col">Ngày đăng ký</th>
                <th scope="col">Hành động</th>
              </tr>
              <tr>
                <th>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lọc"
                      name="theLoai"
                      onChange={(e) => handleFilterChange(e, 'books')}
                    />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lọc"
                      name="createdAt"
                      onChange={(e) => handleFilterChange(e, 'books')}
                    />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lọc"
                      name="updated"
                      onChange={(e) => handleFilterChange(e, 'books')}
                    />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredReaders.map((reader) => (
                <tr key={reader.id}>
                  <td>{reader.maBanDoc}</td>
                  <td>{reader.hoTen}</td>
                  <td>{reader.ngayDangKy}</td>
                  <td>
                    <button className="btn btn-info btn-sm mx-1" onClick={() => handleView(reader)}>
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="btn btn-primary btn-sm mx-1" onClick={() => handleEdit(reader)}>
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-secondary btn-sm mx-1" onClick={() => handleExtendCard(reader)}>
                      Gia hạn thẻ
                    </button>
                    <button className="btn btn-warning btn-sm mx-1" onClick={() => handleChangeCard(reader)}>
                      Đổi thẻ
                    </button>
                    <button className="btn btn-danger btn-sm mx-1" onClick={() => handleCancelShow(reader)}>
                      Hủy thẻ
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nhập thông tin bạn đọc</Modal.Title>
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
            <div className="d-flex flex-wrap">
              <Form.Group className="mb-3" controlId="formWorkUnit" style={{ flex: '1 1 45%', marginRight: '10px' }}>
                <Form.Label>Tên tài khoản</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formWorkAddress" style={{ flex: '1 1 45%' }}>
                <Form.Label>Mật khẩu mặc định</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
            <Button variant="primary" type="submit" style={{ backgroundColor: 'green', border: 'none' }}>
              Tạo tài khoản bạn đọc
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showEditModal} onHide={handleEditClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Đơn đăng ký thẻ bạn đọc đang chờ' : 'Thông tin bạn đọc'}</Modal.Title>
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
            <div className="d-flex flex-wrap">
              <Form.Group className="mb-3" controlId="formWorkUnit" style={{ flex: '1 1 45%', marginRight: '10px' }}>
                <Form.Label>Tên tài khoản</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formWorkAddress" style={{ flex: '1 1 45%' }}>
                <Form.Label>Mật khẩu mặc định</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
            <Button variant="primary" type="submit" style={{ backgroundColor: 'green', border: 'none' }}>
              Tạo tài khoản bạn đọc
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showExtendModal} onHide={() => setShowExtendModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Gia hạn thẻ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <p>
              <strong>Mã bạn đọc:</strong> {currentReader?.maBanDoc}
            </p>
            <p>
              <strong>Tên bạn đọc:</strong> {currentReader?.hoTen}
            </p>
            <Form.Group controlId="extendCardDate">
              <Form.Label>Ngày đăng ký</Form.Label>
              <Form.Control type="text" readOnly value={currentReader?.ngayDangKy || ''} />
            </Form.Group>
            <Form.Group controlId="extendCardMonths">
              <Form.Label>Số lượng tháng muốn gia hạn</Form.Label>
              <Form.Control type="number" value={extendMonths} onChange={(e) => setExtendMonths(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={handleExtendCard} style={{ marginTop: '10px' }}>
              Xác nhận
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showChangeCardModal} onHide={() => setShowChangeCardModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Đổi thẻ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <p>
              <strong>Mã bạn đọc:</strong> {currentReader?.maBanDoc}
            </p>
            <p>
              <strong>Tên bạn đọc:</strong> {currentReader?.hoTen}
            </p>
            <Form.Group controlId="changeCardReason">
              <Form.Label>Lý do đổi thẻ</Form.Label>
              <Form.Control
                type="text"
                value={changeCardReason}
                onChange={(e) => setChangeCardReason(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleChangeCard} style={{ marginTop: '10px' }}>
              Xác nhận
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận hủy thẻ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Bạn có chắc chắn muốn hủy thẻ cho bạn đọc?</p>
          <p>
            <strong>Mã bạn đọc:</strong> {currentReader?.maBanDoc}
          </p>
          <p>
            <strong>Tên bạn đọc:</strong> {currentReader?.hoTen}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCancelModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={handleCancelCard}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default QLBanDoc;
