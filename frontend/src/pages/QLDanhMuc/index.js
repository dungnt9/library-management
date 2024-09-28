import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Form, Modal } from 'react-bootstrap';

function QLDanhMuc() {
  const [showPublisherTable, setShowPublisherTable] = useState(false);
  const [showAuthorTable, setShowAuthorTable] = useState(false);
  const [showPublisherModal, setShowPublisherModal] = useState(false);
  const [showAuthorModal, setShowAuthorModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentPublisher, setCurrentPublisher] = useState(null);
  const [currentAuthor, setCurrentAuthor] = useState(null);

  const handleShowPublisher = () => {
    setShowPublisherTable(true);
    setShowAuthorTable(false);
  };

  const handleShowAuthor = () => {
    setShowAuthorTable(true);
    setShowPublisherTable(false);
  };

  const handleShowPublisherModal = () => setShowPublisherModal(true);
  const handleClosePublisherModal = () => {
    setShowPublisherModal(false);
    setEditMode(false);
    setCurrentPublisher(null);
  };

  const handleShowAuthorModal = () => setShowAuthorModal(true);
  const handleCloseAuthorModal = () => {
    setShowAuthorModal(false);
    setEditMode(false);
    setCurrentAuthor(null);
  };

  const handleEditPublisher = (publisher) => {
    setCurrentPublisher(publisher);
    setEditMode(true);
    handleShowPublisherModal();
  };

  const handleViewPublisher = (publisher) => {
    setCurrentPublisher(publisher);
    handleShowPublisherModal();
  };

  const handleEditAuthor = (author) => {
    setCurrentAuthor(author);
    setEditMode(true);
    handleShowAuthorModal();
  };

  const handleViewAuthor = (author) => {
    setCurrentAuthor(author);
    handleShowAuthorModal();
  };

  const publishers = [
    { id: '1', maNhaXuatBan: 'NXB001', tenNhaXuatBan: 'Nhà Xuất Bản Giáo Dục', soDienThoai: '0123456789' },
    { id: '2', maNhaXuatBan: 'NXB002', tenNhaXuatBan: 'Nhà Xuất Bản Văn Học', soDienThoai: '0987654321' },
    { id: '3', maNhaXuatBan: 'NXB003', tenNhaXuatBan: 'Nhà Xuất Bản Trẻ', soDienThoai: '0234567890' },
    { id: '4', maNhaXuatBan: 'NXB004', tenNhaXuatBan: 'Nhà Xuất Bản Lao Động', soDienThoai: '0345678901' },
    { id: '5', maNhaXuatBan: 'NXB005', tenNhaXuatBan: 'Nhà Xuất Bản Chính Trị Quốc Gia', soDienThoai: '0456789012' },
    { id: '6', maNhaXuatBan: 'NXB006', tenNhaXuatBan: 'Nhà Xuất Bản Kim Đồng', soDienThoai: '0567890123' },
    { id: '7', maNhaXuatBan: 'NXB007', tenNhaXuatBan: 'Nhà Xuất Bản Thế Giới', soDienThoai: '0678901234' },
    {
      id: '8',
      maNhaXuatBan: 'NXB008',
      tenNhaXuatBan: 'Nhà Xuất Bản Đại Học Quốc Gia Hà Nội',
      soDienThoai: '0789012345',
    },
  ];

  const authors = [
    { id: '1', maTacGia: 'TG001', tenTacGia: 'Nguyễn Văn A', soDienThoai: '0123456789' },
    { id: '2', maTacGia: 'TG002', tenTacGia: 'Trần Thị B', soDienThoai: '0987654321' },
    { id: '3', maTacGia: 'TG003', tenTacGia: 'Lê Văn C', soDienThoai: '0234567890' },
    { id: '4', maTacGia: 'TG004', tenTacGia: 'Phạm Thị D', soDienThoai: '0345678901' },
    { id: '5', maTacGia: 'TG005', tenTacGia: 'Hoàng Văn E', soDienThoai: '0456789012' },
    { id: '6', maTacGia: 'TG006', tenTacGia: 'Đỗ Thị F', soDienThoai: '0567890123' },
  ];

  return (
    <div>
      <button
        className="btn my-3"
        onClick={handleShowPublisher}
        style={{
          marginLeft: '13.889vw',
          backgroundColor: showPublisherTable ? 'green' : 'white',
          color: showPublisherTable ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Thông tin nhà xuất bản
      </button>
      <button
        className="btn my-3"
        onClick={handleShowAuthor}
        style={{
          marginLeft: '1vw',
          backgroundColor: showAuthorTable ? 'green' : 'white',
          color: showAuthorTable ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Thông tin tác giả
      </button>

      <div>
        {showPublisherTable && (
          <button
            className="btn btn-primary my-3"
            onClick={handleShowPublisherModal}
            style={{ marginLeft: '13.889vw', backgroundColor: '#d9fbd8c2', border: '2px solid green', color: 'green' }}
          >
            + Thêm nhà xuất bản
          </button>
        )}
        {showAuthorTable && (
          <button
            className="btn btn-primary my-3"
            onClick={handleShowAuthorModal}
            style={{
              marginLeft: '13.889vw',
              backgroundColor: '#d9fbd8c2',
              border: '2px solid green',
              color: 'green',
            }}
          >
            + Thêm tác giả
          </button>
        )}
      </div>

      {showPublisherTable && (
        <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw' }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Số thứ tự</th>
                <th scope="col">Mã nhà xuất bản</th>
                <th scope="col">Tên nhà xuất bản</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col" style={{ width: '15%' }}>
                  Hành động
                </th>
              </tr>
              <tr>
                <th></th>
                <th>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Lọc" />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Lọc" />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Lọc" />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {publishers.map((publisher) => (
                <tr key={publisher.id}>
                  <th scope="row">{publisher.id}</th>
                  <td>{publisher.maNhaXuatBan}</td>
                  <td>{publisher.tenNhaXuatBan}</td>
                  <td>{publisher.soDienThoai}</td>
                  <td>
                    <button className="btn btn-info btn-sm mx-1" onClick={() => handleViewPublisher(publisher)}>
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="btn btn-success btn-sm mx-1" onClick={() => handleEditPublisher(publisher)}>
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
        </div>
      )}

      {showAuthorTable && (
        <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw' }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Số thứ tự</th>
                <th scope="col">Mã tác giả</th>
                <th scope="col">Tên tác giả</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col" style={{ width: '15%' }}>
                  Hành động
                </th>
              </tr>
              <tr>
                <th></th>
                <th>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Lọc" />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Lọc" />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Lọc" />
                    <span className="input-group-text">
                      <i className="fas fa-filter"></i>
                    </span>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author.id}>
                  <th scope="row">{author.id}</th>
                  <td>{author.maTacGia}</td>
                  <td>{author.tenTacGia}</td>
                  <td>{author.soDienThoai}</td>
                  <td>
                    <button className="btn btn-info btn-sm mx-1" onClick={() => handleViewAuthor(author)}>
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="btn btn-success btn-sm mx-1" onClick={() => handleEditAuthor(author)}>
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
        </div>
      )}

      {/* Modal for Publisher */}
      <Modal show={showPublisherModal} onHide={handleClosePublisherModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Chỉnh sửa thông tin nhà xuất bản' : 'Thêm nhà xuất bản'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPublisherName">
              <Form.Label>Tên nhà xuất bản</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên nhà xuất bản"
                defaultValue={editMode && currentPublisher ? currentPublisher.tenNhaXuatBan : ''}
              />
            </Form.Group>
            <Form.Group controlId="formPublisherPhone">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập số điện thoại"
                defaultValue={editMode && currentPublisher ? currentPublisher.soDienThoai : ''}
              />
            </Form.Group>
            <Form.Group controlId="formPublisherPhone">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập địa chỉ"
                defaultValue={editMode && currentPublisher ? currentPublisher.soDienThoai : ''}
              />
            </Form.Group>
            <Form.Group controlId="formPublisherPhone">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập email"
                defaultValue={editMode && currentPublisher ? currentPublisher.soDienThoai : ''}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUploadPhoto">
              <Form.Label>Upload Ảnh</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePublisherModal}>
            Hủy
          </Button>
          <Button variant="primary">{editMode ? 'Lưu thay đổi' : 'Thêm mới'}</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Author */}
      <Modal show={showAuthorModal} onHide={handleCloseAuthorModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Chỉnh sửa thông tin tác giả' : 'Thêm tác giả'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPublisherName">
              <Form.Label>Tên tác giả</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên tác giả"
                defaultValue={editMode && currentPublisher ? currentPublisher.tenNhaXuatBan : ''}
              />
            </Form.Group>
            <Form.Group controlId="formPublisherPhone">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập số điện thoại"
                defaultValue={editMode && currentPublisher ? currentPublisher.soDienThoai : ''}
              />
            </Form.Group>
            <Form.Group controlId="formPublisherPhone">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập địa chỉ"
                defaultValue={editMode && currentPublisher ? currentPublisher.soDienThoai : ''}
              />
            </Form.Group>
            <Form.Group controlId="formPublisherPhone">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập email"
                defaultValue={editMode && currentPublisher ? currentPublisher.soDienThoai : ''}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUploadPhoto">
              <Form.Label>Upload Ảnh</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAuthorModal}>
            Hủy
          </Button>
          <Button variant="primary">{editMode ? 'Lưu thay đổi' : 'Thêm mới'}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default QLDanhMuc;
