import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function QLMuonTra() {
  const [showModal, setShowModal] = useState(false);
  const [bookIds, setBookIds] = useState(['']);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentBook, setCurrentBook] = useState(null);
  const [isViewOnly, setIsViewOnly] = useState(false);
  const [searchTerms, setSearchTerms] = useState({
    maDonMuon: '',
    ngayMuon: '',
    tenBanDoc: '',
    ngayTra: '',
  });

  const books = [
    {
      id: '1',
      maDonMuon: 'MDM001',
      ngayMuon: '2023-01-05',
      tenBanDoc: 'Nguyễn Văn A',
      ngayTra: '2023-03-10',
      thoiGianGiaHan: '2023-04-10',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleShow = () => {
    setShowModal(true);
    setCurrentBook(null);
    setIsViewOnly(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setBookIds(['']);
  };

  const handleEdit = (book, viewOnly = false) => {
    setCurrentBook(book);
    setBookIds([book.maDonMuon, ...Array(4).fill('')]);
    setShowModal(true);
    setIsViewOnly(viewOnly);
  };

  const handleSearchTermChange = (column, value) => {
    setSearchTerms({
      ...searchTerms,
      [column]: value,
    });
  };

  const handleReturnBook = (bookId) => {
    alert(`Trả sách với mã: ${bookId}`);
    // Add your logic here to handle book return
  };

  const formatDate = (date) => {
    if (date === 'Chưa trả') return date;
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${d.getFullYear()}`;
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.maDonMuon.includes(searchTerms.maDonMuon) &&
      book.ngayMuon.includes(searchTerms.ngayMuon) &&
      book.tenBanDoc.includes(searchTerms.tenBanDoc) &&
      book.ngayTra.includes(searchTerms.ngayTra)
    );
  });

  return (
    <div>
      <button
        className="btn btn-primary my-3"
        onClick={handleShow}
        style={{ marginLeft: '13.889vw', backgroundColor: '#d9fbd8c2', border: '2px solid green', color: 'green' }}
      >
        + Tạo đơn mượn sách
      </button>

      <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw' }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Số thứ tự</th>
              <th scope="col">Mã đơn mượn</th>
              <th scope="col">Ngày mượn</th>
              <th scope="col">Tên bạn đọc</th>
              <th scope="col">Ngày trả</th>
              <th scope="col" style={{ width: '15%' }}>
                Hành động
              </th>
            </tr>
            <tr>
              <th scope="row"></th>
              <th>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={searchTerms.maDonMuon}
                    onChange={(e) => handleSearchTermChange('maDonMuon', e.target.value)}
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
                    value={searchTerms.ngayMuon}
                    onChange={(e) => handleSearchTermChange('ngayMuon', e.target.value)}
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
                    value={searchTerms.tenBanDoc}
                    onChange={(e) => handleSearchTermChange('tenBanDoc', e.target.value)}
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, index) => (
              <tr key={book.id}>
                <th scope="row">{index + 1}</th>
                <td>{book.maDonMuon}</td>
                <td>{formatDate(book.ngayMuon)}</td>
                <td>{book.tenBanDoc}</td>
                <td>{formatDate(book.ngayTra)}</td>
                <td>
                  <button className="btn btn-info btn-sm mx-1" onClick={() => handleEdit(book, true)}>
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-success btn-sm mx-1" onClick={() => handleEdit(book, false)}>
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

      {/* Modal */}
      <div
        className={`modal ${showModal ? 'd-block' : ''}`}
        tabIndex="-1"
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog" style={{ maxWidth: '60vw' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{currentBook ? 'Cập nhật đơn mượn sách' : 'Tạo đơn mượn sách'}</h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 d-flex align-items-center">
                  {/* <label htmlFor="maBanDoc" className="form-label mb-0 me-2" style={{ width: '110px' }}>
                    Mã bạn đọc:
                  </label> */}
                  <label htmlFor="maBanDoc" className="form-label mb-0 me-2" style={{ width: '110px' }}>
                    Tên bạn đọc:
                  </label>
                  {/* <input
                    type="text"
                    className="form-control me-2"
                    id="maBanDoc"
                    name="maBanDoc"
                    placeholder="Nhập mã bạn đọc"
                  /> */}
                  <span>{currentBook?.tenBanDoc || ''}</span>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="thoiGianMuon" className="form-label mb-0 me-2">
                    Thời gian mượn:
                  </label>
                  <span>{currentBook ? formatDate(currentBook.ngayMuon) : currentTime.toLocaleString()}</span>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="maSachMuon" className="form-label mb-0 me-2">
                    Đơn sách mượn:
                  </label>
                  <span>{bookIds.join('')}</span>
                </div>
                {/* <div className="mb-3 d-flex">
                  <div className="input-group me-2">
                    <label htmlFor="maSach" className="form-label mb-0 me-2">
                      Mã sách:
                    </label>
                    <input type="text" className="form-control" id="maSach" name="maSach" placeholder="Nhập mã sách" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="soLuong" className="form-label mb-0 me-2">
                      Số lượng:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="soLuong"
                      name="soLuong"
                      placeholder="Nhập số lượng"
                    />
                  </div>
                </div>
                {!isViewOnly && (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ backgroundColor: 'white', color: 'green', border: '2px solid green' }}
                  >
                    + Thêm sách mượn
                  </button>
                )}
                <br></br>
                <br></br> */}
                {!isViewOnly && (
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'd9fbd8c2' }}>
                    {currentBook ? 'Cập nhật' : 'Tạo đơn mượn sách'}
                  </button>
                )}
              </form>
              {currentBook && (
                <table className="table mt-3">
                  <thead>
                    <tr>
                      <th scope="col">Mã đơn sách</th>
                      <th scope="col">Tên sách</th>
                      <th scope="col">Thời gian gia hạn</th>
                      <th scope="col">Thời gian trả</th>
                      <th scope="col">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book, index) => (
                      <tr key={index}>
                        <td>{book.maDonMuon}</td>
                        <td>Tên sách mẫu</td>
                        <td>{formatDate(book.thoiGianGiaHan)}</td>
                        <td>{formatDate(book.ngayTra)}</td>
                        <td>
                          {book.ngayTra === 'Chưa trả' && (
                            <button className="btn btn-warning btn-sm" onClick={() => handleReturnBook(book.maDonMuon)}>
                              Trả sách
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QLMuonTra;
