import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const TraCuu = () => {
  const [filters, setFilters] = useState({
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
      maSach: '55',
      tieuDe: 'Introduction to Electrodynamics',
      theLoai: 'Vật lý',
      tacGia: 'David J. Griffiths',
      namXuatBan: '2017',
      nhaXuatBan: 'Cambridge University Press',
      link: '/book-details/3',
    },
    {
      maSach: '65',
      tieuDe: 'Thermodynamics',
      theLoai: 'Vật lý',
      tacGia: 'Herbert Callen',
      namXuatBan: '1985',
      nhaXuatBan: 'Wiley',
      link: '/book-details/4',
    },
    {
      maSach: '87',
      tieuDe: 'Statistical Physics',
      theLoai: 'Vật lý',
      tacGia: 'L.D. Landau, E.M. Lifshitz',
      namXuatBan: '1980',
      nhaXuatBan: 'Butterworth-Heinemann',
      link: '/book-details/5',
    },
    {
      maSach: '88',
      tieuDe: 'General Relativity',
      theLoai: 'Vật lý',
      tacGia: 'Robert Wald',
      namXuatBan: '1984',
      nhaXuatBan: 'University of Chicago Press',
      link: '/book-details/6',
    },
    {
      maSach: '90',
      tieuDe: 'Modern Physics',
      theLoai: 'Vật lý',
      tacGia: 'Paul Tipler, Ralph Llewellyn',
      namXuatBan: '2007',
      nhaXuatBan: 'W.H. Freeman',
      link: '/book-details/7',
    },
    {
      maSach: '98',
      tieuDe: 'Statistical Physics',
      theLoai: 'Vật lý',
      tacGia: 'L.D. Landau, E.M. Lifshitz',
      namXuatBan: '1980',
      nhaXuatBan: 'Butterworth-Heinemann',
      link: '/book-details/5',
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

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
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ marginTop: '1.389vw', marginLeft: '13.889vw', marginRight: '13.889vw' }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Từ khóa
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Nhập từ khóa bạn muốn tìm kiếm"
                aria-label="Nhập từ khóa bạn muốn tìm kiếm"
                style={{ width: '55vw' }}
              />
              <button className="btn btn-outline-success" type="submit" style={{ width: '7vw' }}>
                Tìm kiếm
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw' }}>
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
