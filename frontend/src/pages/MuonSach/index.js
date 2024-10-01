import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function MuonSach() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [extensionDays, setExtensionDays] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('/api/don-muon-sach', {
        params: { ma_ban_doc: localStorage.getItem('ma_ban_doc') }
      });
      console.log('Dữ liệu từ API:', response.data); // Log dữ liệu
      setBooks(response.data);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu sách:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleShow = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBook(null);
    setExtensionDays('');
  };

  const handleExtensionDaysChange = (e) => {
    setExtensionDays(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/don-muon-sach/extend/${selectedBook.ma_chi_tiet_don_muon_sach}`, {
        extension_days: extensionDays
      });
      fetchBooks();
      handleClose();
    } catch (error) {
      console.error('Error extending book loan:', error);
    }
  };

  return (
    <div>
      <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw', paddingTop:'10px' }}>
        <table className="table" border="1" cellSpacing="0" cellPadding="10">
          <thead>
            <tr>
              <th scope="col">Số thứ tự</th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Thời gian mượn</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Thời gian gia hạn</th>
              <th scope="col">Thời gian trả</th>
              <th scope="col">Gia hạn</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.ma_chi_tiet_don_muon_sach}>
                <th scope="row">{index + 1}</th>
                <td>{book.sach.bien_muc_sach.tieu_de}</td>
                <td>{book.don_muon_sach.thoi_gian_muon}</td>
                <td>{book.trang_thai}</td>
                <td>{book.thoi_gian_gia_han || 'Chưa gia hạn'}</td>
                <td>{book.thoi_gian_tra}</td>
                <td>
                  {book.trang_thai !== 'Đã trả' && !book.thoi_gian_gia_han && (
                    <Button
                      className="btn btn-primary"
                      style={{ backgroundColor: 'rgb(70, 195, 61)', border: 'none' }}
                      onClick={() => handleShow(book)}
                    >
                      Gia hạn
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gia hạn sách</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBook && (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Tiêu đề:</Form.Label>
                <Form.Control type="text" value={selectedBook.sach.bien_muc_sach.tieu_de} readOnly />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Thời gian mượn:</Form.Label>
                <Form.Control type="text" value={selectedBook.don_muon_sach.thoi_gian_muon} readOnly />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Trạng thái:</Form.Label>
                <Form.Control type="text" value={selectedBook.trang_thai} readOnly />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Thời gian trả:</Form.Label>
                <Form.Control type="text" value={selectedBook.thoi_gian_tra} readOnly />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Số ngày muốn gia hạn:</Form.Label>
                <Form.Control type="number" value={extensionDays} onChange={handleExtensionDaysChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Xác nhận gia hạn
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
      <pre>{JSON.stringify(books, null, 2)}</pre> {/* Thêm dòng này để hiển thị dữ liệu */}
    </div>
  );
}

export default MuonSach;
