import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const TraCuu = () => {
  const [bookTitles, setBookTitles] = useState([]);
  const [filters, setFilters] = useState({
    maSach: '',
    tieuDe: '',
    theLoai: '',
    phienBan: '',
    giaBan: '',
    soTrang: ''
  });

  // Gọi API lấy danh sách nhà xuất bản từ Laravel backend
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/bien_muc_sach') // Đường dẫn API Laravel
      .then(response => {
        setBookTitles(response.data); // Lưu dữ liệu nhà xuất bản vào state
      })
      .catch(error => {
        console.error('Error fetching bookTitle:', error);
      });
  }, []); // Chạy khi component được render

  // Hàm để xử lý thay đổi input lọc
  const handleFilterChange = (event, field) => {
    setFilters({ ...filters, [field]: event.target.value });
  };

  // Hàm lọc sách dựa trên các giá trị lọc
  const filteredBooks = bookTitles.filter(book => {
    return (
      (filters.maSach === '' || book.ma_bien_muc_sach.toString().includes(filters.maSach)) &&
      (filters.tieuDe === '' || book.tieu_de.toLowerCase().includes(filters.tieuDe.toLowerCase())) &&
      (filters.theLoai === '' || book.the_loai.toLowerCase().includes(filters.theLoai.toLowerCase())) &&
      (filters.phienBan === '' || book.phien_ban.toLowerCase().includes(filters.phienBan.toLowerCase())) &&
      (filters.giaBan === '' || book.gia_bia.toString().includes(filters.giaBan)) &&
      (filters.soTrang === '' || book.so_trang.toString().includes(filters.soTrang))
    );
  });

  return (
    <div>
      <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw', paddingTop: '1vw' }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã sách</th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Thể loại</th>
              <th scope="col">Phiên bản</th>
              <th scope="col">Giá bán</th>
              <th scope="col">Số trang</th>
            </tr>
            <tr>
              <th>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Lọc"
                    value={filters.maSach}
                    onChange={(e) => handleFilterChange(e, 'maSach')}
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
                    value={filters.tieuDe}
                    onChange={(e) => handleFilterChange(e, 'tieuDe')}
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
                    value={filters.theLoai}
                    onChange={(e) => handleFilterChange(e, 'theLoai')}
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
                    value={filters.phienBan}
                    onChange={(e) => handleFilterChange(e, 'phienBan')}
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
                    value={filters.giaBan}
                    onChange={(e) => handleFilterChange(e, 'giaBan')}
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
                    value={filters.soTrang}
                    onChange={(e) => handleFilterChange(e, 'soTrang')}
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
            {filteredBooks.map((bookTitle) => (
              <tr>
                <th>{bookTitle.ma_bien_muc_sach}</th>
                <td>{bookTitle.tieu_de}</td>
                <td>{bookTitle.the_loai}</td>
                <td>{bookTitle.phien_ban}</td>
                <td>{bookTitle.gia_bia}</td>
                <td>{bookTitle.so_trang}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TraCuu;
