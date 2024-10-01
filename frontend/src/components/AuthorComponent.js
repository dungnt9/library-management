import React, { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';

function AuthorComponent({ authors, onAdd, onEdit, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [currentAuthor, setCurrentAuthor] = useState(null);

  const handleShowModal = (author = null) => {
    setCurrentAuthor(author);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentAuthor(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const authorData = Object.fromEntries(formData.entries());
    
    if (currentAuthor) {
      onEdit(currentAuthor.ma_tac_gia, authorData);
    } else {
      onAdd(authorData);
    }
    
    handleCloseModal();
  };

  return (
    <div>
      <Button onClick={() => handleShowModal()} variant="success" className="mb-3">
      <i className="fas fa-plus"></i> Thêm tác giả
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.ma_tac_gia}>
              <td>{author.ma_tac_gia}</td>
              <td>{author.ten_tac_gia}</td>
              <td>{author.dia_chi}</td>
              <td>{author.sdt}</td>
              <td>{author.email}</td>
              <td>
                <Button onClick={() => handleShowModal(author)} variant="warning" className="me-2 btn-sm">
                  <i className="fas fa-edit"></i>
                </Button>
                <Button onClick={() => onDelete(author.ma_tac_gia)} variant="danger" className="btn-sm">
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{currentAuthor ? 'Edit Author' : 'Add Author'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                name="ten_tac_gia" 
                defaultValue={currentAuthor?.ten_tac_gia || ''}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control 
                name="dia_chi" 
                defaultValue={currentAuthor?.dia_chi || ''}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control 
                name="sdt" 
                defaultValue={currentAuthor?.sdt || ''}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                name="email" 
                type="email"
                defaultValue={currentAuthor?.email || ''}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {currentAuthor ? 'Save Changes' : 'Add Author'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default AuthorComponent;