import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function MuonSach() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [extensionDays, setExtensionDays] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the extension
    const updatedBooks = books.map((book) =>
      book.id === selectedBook.id ? { ...book, extensionDate: extensionDays, extended: true } : book,
    );
    setBooks(updatedBooks);
    handleClose();
  };

  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Cơ học cổ điển',
      borrowDate: '2023-01-05',
      status: 'Đã trả',
      extensionDate: '2023-03-05',
      returnDate: '2023-03-10',
      extended: true,
    },
    {
      id: 2,
      title: 'Vật lý lượng tử',
      borrowDate: '2023-02-10',
      status: 'Đang mượn',
      extensionDate: '',
      returnDate: 'Chưa trả',
      extended: false,
    },
  ]);

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
              <tr key={book.id}>
                <th scope="row">{index + 1}</th>
                <td>{book.title}</td>
                <td>{book.borrowDate}</td>
                <td>{book.status}</td>
                <td>{book.extensionDate}</td>
                <td>{book.returnDate}</td>
                <td>
                  {book.status === 'Đã trả' || book.extended ? (
                    <span>{book.extended ? 'Đã gia hạn' : ''}</span>
                  ) : (
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
                <Form.Control type="text" value={selectedBook.title} readOnly />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Thời gian mượn:</Form.Label>
                <Form.Control type="text" value={selectedBook.borrowDate} readOnly />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Trạng thái:</Form.Label>
                <Form.Control type="text" value={selectedBook.status} readOnly />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Thời gian gia hạn:</Form.Label>
                <Form.Control type="text" value={selectedBook.extensionDate || 'Chưa gia hạn'} readOnly />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Thời gian trả:</Form.Label>
                <Form.Control type="text" value={selectedBook.returnDate} readOnly />
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
    </div>
  );
}

export default MuonSach;
