import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <Button
            onClick={handleShowPublisher}
            variant={showPublisherTable ? "success" : "outline-success"}
            className="me-2"
          >
            Nhà xuất bản
          </Button>
          <Button
            onClick={handleShowAuthor}
            variant={!showPublisherTable ? "success" : "outline-success"}
          >
            Tác giả
          </Button>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          {showPublisherTable ? (
            <div>
              <h2 className="card-title mb-3">Quản lý Nhà xuất bản</h2>
              <PublisherComponent
                publishers={publishers}
                onAdd={addPublisher}
                onEdit={editPublisher}
                onDelete={deletePublisher}
              />
            </div>
          ) : (
            <div>
              <h2 className="card-title mb-3">Quản lý Tác giả</h2>
              <AuthorComponent
                authors={authors}
                onAdd={addAuthor}
                onEdit={editAuthor}
                onDelete={deleteAuthor}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QLDanhMuc;
