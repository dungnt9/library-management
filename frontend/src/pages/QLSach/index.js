import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Form} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function QLSach() {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [showDescriptionSection, setShowDescriptionSection] = useState(true);
  const [showImportSection, setShowImportSection] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [activeButton, setActiveButton] = useState('Mô tả biên mục sách');
  const [bookFilters, setBookFilters] = useState({});
  const [importFilters, setImportFilters] = useState({});
  const handleAddUncatalogedBook = () => {
    // Xử lý logic thêm sách chưa được biên mục tại đây
  };

  const handleAddCatalogedBook = () => {
    // Xử lý logic thêm sách đã có biên mục tại đây
  };
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentBook(null);
    setShowImportModal(false);
  };

  const handleEdit = (book) => {
    setCurrentBook(book);
    setEditMode(true);
    handleShow();
  };

  const handleView = (book) => {
    setCurrentBook(book);
    handleShow();
  };

  const handleToggleDescription = () => {
    setShowDescriptionSection(true);
    setShowImportSection(false);
    setActiveButton('Mô tả biên mục sách');
  };

  const handleToggleImport = () => {
    setShowImportSection(true);
    setShowDescriptionSection(false);
    setActiveButton('Nhập sách');
  };

  const handleShowImportModal = () => setShowImportModal(true);

  const handleFilterChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'books') {
      setBookFilters({
        ...bookFilters,
        [name]: value,
      });
    } else if (section === 'imports') {
      setImportFilters({
        ...importFilters,
        [name]: value,
      });
    }
  };

  const filterBooks = (book) => {
    return Object.keys(bookFilters).every((key) => book[key].toLowerCase().includes(bookFilters[key].toLowerCase()));
  };

  const filterImports = (record) => {
    return Object.keys(importFilters).every((key) =>
      record[key].toLowerCase().includes(importFilters[key].toLowerCase()),
    );
  };

  const books = [
    {
      id: '1',
      tieuDe: 'Lược Sử Việt Nam',
      moTa: 'Cuốn sách tóm tắt lịch sử Việt Nam.',
      theLoai: 'Lịch sử',
      tacgia: 'Nguyễn Văn A',
      nhaXuatBan: 'Nhà Xuất Bản Giáo Dục',
    },
    {
      id: '2',
      tieuDe: 'Chí Phèo',
      moTa: 'Tác phẩm kinh điển của nhà văn Nam Cao.',
      theLoai: 'Văn học',
      tacgia: 'Nguyễn Văn A',
      nhaXuatBan: 'Nhà Xuất Bản Văn Học',
    },
    {
      id: '3',
      tieuDe: 'Bí Mật Tư Duy Triệu Phú',
      moTa: 'Cuốn sách giúp định hình tư duy.',
      theLoai: 'Phát triển bản thân',
      tacgia: 'Nguyễn Văn A',
      nhaXuatBan: 'Nhà Xuất Bản Tổng Hợp Thành Phố Hồ Chí Minh',
    },
    {
      id: '4',
      tieuDe: 'Đất Rừng Phương Nam',
      moTa: 'Tác phẩm của nhà văn Doãn Giỏi.',
      theLoai: 'Văn học',
      tacgia: 'Nguyễn Văn A',
      nhaXuatBan: 'Nhà Xuất Bản Văn Học',
    },
    {
      id: '5',
      tieuDe: 'Tiếng Gọi Công Lý',
      moTa: 'Cuốn sách tâm lý học pháp luật.',
      theLoai: 'Tâm lý - Pháp luật',
      tacgia: 'Nguyễn Văn A',
      nhaXuatBan: 'Nhà Xuất Bản Tri Thức',
    },
    // Add more book records as needed
  ];

  const importRecords = [
    {
      id: '1',
      maPhieu: 'PN001',
      ngayNhap: '2023-06-01',
      soLuong: 50,
      tongGiaTri: '5,000,000 VND',
      nhaCungCap: 'Công Ty Sách A',
      thuThu: 'Nguyễn Văn A',
    },
    {
      id: '2',
      maPhieu: 'PN002',
      ngayNhap: '2023-07-15',
      soLuong: 30,
      tongGiaTri: '3,000,000 VND',
      nhaCungCap: 'Công Ty Sách B',
      thuThu: 'Trần Thị B',
    },
    {
      id: '3',
      maPhieu: 'PN003',
      ngayNhap: '2023-06-01',
      soLuong: 50,
      tongGiaTri: '5,000,000 VND',
      nhaCungCap: 'Công Ty Sách A',
      thuThu: 'Nguyễn Văn A',
    },
    {
      id: '4',
      maPhieu: 'PN004',
      ngayNhap: '2023-07-15',
      soLuong: 30,
      tongGiaTri: '3,000,000 VND',
      nhaCungCap: 'Công Ty Sách B',
      thuThu: 'Trần Thị B',
    },
    // Add more import records as needed
  ];
  const [ngayNhap, setNgayNhap] = useState(new Date());
  return (
    <div>
      <button
        className="btn my-3"
        onClick={handleToggleDescription}
        style={{
          marginLeft: '13.889vw',
          backgroundColor: activeButton === 'Mô tả biên mục sách' ? 'green' : 'white',
          color: activeButton === 'Mô tả biên mục sách' ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Mô tả biên mục sách
      </button>
      <button
        className="btn my-3"
        onClick={handleToggleImport}
        style={{
          marginLeft: '1vw',
          backgroundColor: activeButton === 'Nhập sách' ? 'green' : 'white',
          color: activeButton === 'Nhập sách' ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Nhập sách
      </button>
      <button
        className="btn my-3"
        style={{ marginLeft: '1vw', backgroundColor: 'white', color: 'black', border: '1px solid green' }}
      >
        Sắp xếp sách
      </button>

      {showDescriptionSection && (
        <div>
          <button
            className="btn btn-success my-3"
            onClick={handleShow}
            style={{ marginLeft: '13.889vw', backgroundColor: '#d9fbd8c2', border: '2px solid green', color: 'green' }}
          >
            + Thêm biên mục sách
          </button>

          <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw' }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Mã biên mục sách</th>
                  <th scope="col">Tiêu đề</th>
                  <th scope="col">Mô tả</th>
                  <th scope="col">Thể loại</th>
                  <th scope="col">Tác giả</th>
                  <th scope="col">Nhà xuất bản</th>
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
                        name="moTa"
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
                {books.filter(filterBooks).map((book) => (
                  <tr key={book.id}>
                    <th scope="row">{book.id}</th>
                    <td>{book.tieuDe}</td>
                    <td>{book.moTa}</td>
                    <td>{book.theLoai}</td>
                    <td>{book.tacgia}</td>
                    <td>{book.nhaXuatBan}</td>
                    <td>
                      <button className="btn btn-info btn-sm mx-1" onClick={() => handleView(book)}>
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="btn btn-success btn-sm mx-1" onClick={() => handleEdit(book)}>
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
        </div>
      )}

      {showImportSection && (
        <div>
          <button
            className="btn btn-success my-3"
            onClick={handleShowImportModal}
            style={{ marginLeft: '13.889vw', backgroundColor: '#d9fbd8c2', border: '2px solid green', color: 'green' }}
          >
            + Thêm phiếu nhập
          </button>

          <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw' }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Mã phiếu nhập</th>
                  <th scope="col">Ngày nhập</th>
                  <th scope="col">Thủ thư</th>
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
                        name="tongGiaTri"
                        onChange={(e) => handleFilterChange(e, 'imports')}
                      />
                      <span className="input-group-text">
                        <i className="fas fa-filter"></i>
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="input-group">
                      <input type="date" className="form-control" name="ngayDangKy" placeholder="Lọc..." />
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
                        name="thuThu"
                        onChange={(e) => handleFilterChange(e, 'imports')}
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
                {importRecords.filter(filterImports).map((record) => (
                  <tr key={record.id}>
                    <th scope="row">{record.maPhieu}</th>
                    <td>{record.ngayNhap}</td>
                    <td>{record.thuThu}</td>
                    <td>
                      <button className="btn btn-info btn-sm mx-1" onClick={() => handleView(record)}>
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="btn btn-success btn-sm mx-1" onClick={() => handleEdit(record)}>
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
        </div>
      )}

      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: showModal ? 'block' : 'none' }}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editMode ? 'Chỉnh sửa biên mục sách' : 'Thêm biên mục sách'}</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="tieuDe" className="form-label">
                        Mã biên mục sách
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tieuDe"
                        defaultValue={currentBook?.tieuDe || ''}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="moTa" className="form-label">
                        Tiêu đề
                      </label>
                      <input type="text" className="form-control" id="moTa" defaultValue={currentBook?.moTa || ''} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="theLoai" className="form-label">
                        Mô tả
                      </label>
                      <textarea
                        rows="5"
                        className="form-control"
                        id="theLoai"
                        defaultValue={currentBook?.theLoai || ''}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="tacGia" className="form-label">
                        Thể loại
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tacGia"
                        defaultValue={currentBook?.tacgia || ''}
                      />

                      <label htmlFor="maBienMucSach" className="form-label">
                        Số trang
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="maBienMucSach"
                        defaultValue={currentBook?.maBienMucSach || ''}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="nhaXuatBan" className="form-label">
                        Phiên bản
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nhaXuatBan"
                        defaultValue={currentBook?.nhaXuatBan || ''}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="namXuatBan" className="form-label">
                        Giá bìa
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="namXuatBan"
                        defaultValue={currentBook?.namXuatBan || ''}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="nhaXuatBan" className="form-label">
                        Mã nhà xuất bản
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nhaXuatBan"
                        defaultValue={currentBook?.nhaXuatBan || ''}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="namXuatBan" className="form-label">
                        Mã tác giả
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="namXuatBan"
                        defaultValue={currentBook?.namXuatBan || ''}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <Form.Group className="mb-3" controlId="formUploadPhoto">
                      <Form.Label>Upload Ảnh</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Hủy
                </button>
                <button type="button" className="btn btn-primary">
                  {editMode ? 'Lưu' : 'Thêm'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showImportModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: showImportModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editMode ? 'blabla' : 'Thêm phiếu nhập sách'}</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="maPhieuNhap" className="form-label">
                        Mã phiếu nhập sách
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="maPhieuNhap"
                        defaultValue={currentBook?.maPhieuNhap || ''}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ngayNhap" className="form-label">
                        Ngày nhập
                      </label>
                      <br></br>
                      <DatePicker
                        className="form-control"
                        selected={ngayNhap}
                        onChange={(date) => setNgayNhap(date)}
                        dateFormat="dd/MM/yyyy"
                      />
                    </div>
                  </div>
                </form>
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="maBienMuc" className="form-label">
                        Mã biên mục sách
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="maBienMuc"
                        defaultValue={currentBook?.maBienMuc || ''}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="soLuongNhap" className="form-label">
                        Số lượng nhập
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="soLuongNhap"
                        defaultValue={currentBook?.soLuongNhap || ''}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="giaNhap" className="form-label">
                        Giá nhập
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="giaNhap"
                        defaultValue={currentBook?.giaNhap || ''}
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={handleAddUncatalogedBook}>
                  <i className="fas fa-plus"></i> Thêm sách chưa được biên mục
                </button>
                <button type="button" className="btn btn-info" onClick={handleAddCatalogedBook}>
                  <i className="fas fa-plus"></i> Thêm sách đã có biên mục
                </button>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Hủy
                </button>
                <button type="button" className="btn btn-primary">
                  {editMode ? 'Lưu' : 'Thêm'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QLSach;
