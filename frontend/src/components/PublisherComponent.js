import React, { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';

function PublisherComponent({ publishers, onAdd, onEdit, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [currentPublisher, setCurrentPublisher] = useState(null);

  const handleShowModal = (publisher = null) => {
    setCurrentPublisher(publisher);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPublisher(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const publisherData = Object.fromEntries(formData.entries());
    
    if (currentPublisher) {
      onEdit(currentPublisher.ma_nha_xuat_ban, publisherData);
    } else {
      onAdd(publisherData);
    }
    
    handleCloseModal();
  };

  return (
    <div>
      <Button onClick={() => handleShowModal()} variant="primary" className="mb-3">
        Add Publisher
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {publishers.map((publisher) => (
            <tr key={publisher.ma_nha_xuat_ban}>
              <td>{publisher.ma_nha_xuat_ban}</td>
              <td>{publisher.ten_nha_xuat_ban}</td>
              <td>{publisher.dia_chi}</td>
              <td>{publisher.sdt}</td>
              <td>{publisher.email}</td>
              <td>
                <Button onClick={() => handleShowModal(publisher)} variant="warning" className="me-2">Edit</Button>
                <Button onClick={() => onDelete(publisher.ma_nha_xuat_ban)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{currentPublisher ? 'Edit Publisher' : 'Add Publisher'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                name="ten_nha_xuat_ban" 
                defaultValue={currentPublisher?.ten_nha_xuat_ban || ''}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control 
                name="dia_chi" 
                defaultValue={currentPublisher?.dia_chi || ''}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control 
                name="sdt" 
                defaultValue={currentPublisher?.sdt || ''}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                name="email" 
                type="email"
                defaultValue={currentPublisher?.email || ''}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {currentPublisher ? 'Save Changes' : 'Add Publisher'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default PublisherComponent;