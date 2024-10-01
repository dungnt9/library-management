import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from 'react-bootstrap';
import PublisherComponent from '../../components/PublisherComponent';
import AuthorComponent from '../../components/AuthorComponent';
import usePublishers from '../../hooks/usePublishers';
import useAuthors from '../../hooks/useAuthors';

function QLDanhMuc() {
  const [showPublisherTable, setShowPublisherTable] = useState(true);
  const { publishers, addPublisher, editPublisher, deletePublisher } = usePublishers();
  const { authors, addAuthor, editAuthor, deleteAuthor } = useAuthors();

  const handleShowPublisher = () => setShowPublisherTable(true);
  const handleShowAuthor = () => setShowPublisherTable(false);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Quản lý Danh mục</h1>
      <div className="mb-3">
        <Button
          onClick={handleShowPublisher}
          variant={showPublisherTable ? "primary" : "secondary"}
          className="me-2"
        >
          Nhà xuất bản
        </Button>
        <Button
          onClick={handleShowAuthor}
          variant={!showPublisherTable ? "primary" : "secondary"}
        >
          Tác giả
        </Button>
      </div>

      {showPublisherTable ? (
        <div>
          <h2 className="mb-3">Quản lý Nhà xuất bản</h2>
          <PublisherComponent
            publishers={publishers}
            onAdd={addPublisher}
            onEdit={editPublisher}
            onDelete={deletePublisher}
          />
        </div>
      ) : (
        <div>
          <h2 className="mb-3">Quản lý Tác giả</h2>
          <AuthorComponent
            authors={authors}
            onAdd={addAuthor}
            onEdit={editAuthor}
            onDelete={deleteAuthor}
          />
        </div>
      )}
    </div>
  );
}

export default QLDanhMuc;