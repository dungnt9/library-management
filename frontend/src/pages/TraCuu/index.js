import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TraCuu = () => {
  const [filters] = useState({
    maSach: '',
    tieuDe: '',
    theLoai: '',
    tacGia: '',
    namXuatBan: '',
    nhaXuatBan: '',
  });

  const [data] = useState([
    {
      maSach: '31',
      tieuDe: 'Classical Mechanics',
      theLoai: 'Vật lý',
      tacGia: 'John Taylor',
      namXuatBan: '2005',
      nhaXuatBan: 'University Science Books',
      link: '/book-details/1',
    },
    {
      maSach: '54',
      tieuDe: 'Quantum Physics',
      theLoai: 'Vật lý',
      tacGia: 'Stephen Gasiorowicz',
      namXuatBan: '2003',
      nhaXuatBan: 'Wiley',
      link: '/book-details/2',
    },
    {
      maSach: '99',
      tieuDe: 'General Relativity',
      theLoai: 'Vật lý',
      tacGia: 'Robert Wald',
      namXuatBan: '1984',
      nhaXuatBan: 'University of Chicago Press',
      link: '/book-details/6',
    },
  ]);

  const filteredData = data.filter((item) => {
    return (
      item.maSach.includes(filters.maSach) &&
      item.tieuDe.toLowerCase().includes(filters.tieuDe.toLowerCase()) &&
      item.theLoai.toLowerCase().includes(filters.theLoai.toLowerCase()) &&
      item.tacGia.toLowerCase().includes(filters.tacGia.toLowerCase()) &&
      item.namXuatBan.includes(filters.namXuatBan) &&
      item.nhaXuatBan.toLowerCase().includes(filters.nhaXuatBan.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw', paddingTop:'1vw' }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{ width: '80px' }}>
                Mã sách
              </th>
              <th scope="col">Tiêu đề</th>
              <th scope="col" style={{ width: '130px' }}>
                Thể loại
              </th>
              <th scope="col">Tác giả</th>
              <th scope="col" style={{ width: '150px' }}>
                Năm xuất bản
              </th>
              <th scope="col">Nhà xuất bản</th>
              <th scope="col" style={{ width: '80px' }}>
                Chi tiết
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
            {filteredData.map((item) => (
              <tr key={item.maSach}>
                <th scope="row">{item.maSach}</th>
                <td>{item.tieuDe}</td>
                <td>{item.theLoai}</td>
                <td>{item.tacGia}</td>
                <td>{item.namXuatBan}</td>
                <td>{item.nhaXuatBan}</td>
                <td>
                  <Link to={item.link}>
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TraCuu;
