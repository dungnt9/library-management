import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

function BaoCao() {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentBorrow, setCurrentBorrow] = useState(null);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPublisher, setSelectedPublisher] = useState('');
  const [activeButton, setActiveButton] = useState('Thống kê bạn đọc');

  const handlePrint = () => {
    window.print();
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handlePublisherChange = (e) => {
    setSelectedPublisher(e.target.value);
  };

  const handleToggleImport = (buttonName) => {
    console.log('Button Clicked:', buttonName);
    setActiveButton(buttonName);
  };

  const overdueBarData = {
    labels: [
      '2022 - Tháng 1',
      '2022 - Tháng 2',
      '2022 - Tháng 3',
      '2022 - Tháng 4',
      '2022 - Tháng 5',
      '2022 - Tháng 6',
      '2022 - Tháng 7',
      '2022 - Tháng 8',
      '2022 - Tháng 9',
      '2022 - Tháng 10',
      '2022 - Tháng 11',
      '2022 - Tháng 12',
      '2023 - Tháng 1',
      '2023 - Tháng 2',
      '2023 - Tháng 3',
      '2023 - Tháng 4',
      '2023 - Tháng 5',
      '2023 - Tháng 6',
      '2023 - Tháng 7',
      '2023 - Tháng 8',
      '2023 - Tháng 9',
      '2023 - Tháng 10',
      '2023 - Tháng 11',
      '2023 - Tháng 12',
    ],
    datasets: [
      {
        label: 'Số sách mượn quá hạn',
        data: [5, 8, 6, 9, 10, 7, 5, 6, 8, 10, 7, 6, 4, 7, 5, 8, 9, 6, 5, 7, 6, 8, 9, 5], // Dữ liệu mẫu, thay đổi theo nhu cầu của bạn
        backgroundColor: '#FF6384',
      },
    ],
  };

  const overdueBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Thời gian (Năm - Tháng)',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Số sách mượn quá hạn',
        },
      },
    },
  };

  const borrowedBooksAreaData = {
    labels: [
      '2022 - Tháng 1',
      '2022 - Tháng 2',
      '2022 - Tháng 3',
      '2022 - Tháng 4',
      '2022 - Tháng 5',
      '2022 - Tháng 6',
      '2022 - Tháng 7',
      '2022 - Tháng 8',
      '2022 - Tháng 9',
      '2022 - Tháng 10',
      '2022 - Tháng 11',
      '2022 - Tháng 12',
      '2023 - Tháng 1',
      '2023 - Tháng 2',
      '2023 - Tháng 3',
      '2023 - Tháng 4',
      '2023 - Tháng 5',
      '2023 - Tháng 6',
      '2023 - Tháng 7',
      '2023 - Tháng 8',
      '2023 - Tháng 9',
      '2023 - Tháng 10',
      '2023 - Tháng 11',
      '2023 - Tháng 12',
    ],
    datasets: [
      {
        label: 'Số lượng sách mượn',
        data: [5, 8, 6, 9, 10, 7, 5, 6, 8, 10, 7, 6, 4, 7, 5, 8, 9, 6, 5, 7, 6, 8, 9, 5], // Dữ liệu mẫu, thay đổi theo nhu cầu của bạn
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };
  const borrowedBooksAreaOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Thời gian (Năm - Tháng)',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Số lượng sách mượn',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  const booksLineData = {
    labels: [
      '2022 - Tháng 1',
      '2022 - Tháng 2',
      '2022 - Tháng 3',
      '2022 - Tháng 4',
      '2022 - Tháng 5',
      '2022 - Tháng 6',
      '2022 - Tháng 7',
      '2022 - Tháng 8',
      '2022 - Tháng 9',
      '2022 - Tháng 10',
      '2022 - Tháng 11',
      '2022 - Tháng 12',
      '2023 - Tháng 1',
      '2023 - Tháng 2',
      '2023 - Tháng 3',
      '2023 - Tháng 4',
      '2023 - Tháng 5',
      '2023 - Tháng 6',
      '2023 - Tháng 7',
      '2023 - Tháng 8',
      '2023 - Tháng 9',
      '2023 - Tháng 10',
      '2023 - Tháng 11',
      '2023 - Tháng 12',
    ],
    datasets: [
      {
        label: 'Số lượng sách',
        data: [20, 15, 30, 25, 35, 45, 50, 40, 35, 30, 25, 20, 22, 18, 28, 24, 36, 48, 52, 44, 38, 34, 26, 24], // Dữ liệu mẫu, thay đổi theo nhu cầu của bạn
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const readersBarData = {
    labels: [
      '2022 - Tháng 1',
      '2022 - Tháng 2',
      '2022 - Tháng 3',
      '2022 - Tháng 4',
      '2022 - Tháng 5',
      '2022 - Tháng 6',
      '2022 - Tháng 7',
      '2022 - Tháng 8',
      '2022 - Tháng 9',
      '2022 - Tháng 10',
      '2022 - Tháng 11',
      '2022 - Tháng 12',
      '2023 - Tháng 1',
      '2023 - Tháng 2',
      '2023 - Tháng 3',
      '2023 - Tháng 4',
      '2023 - Tháng 5',
      '2023 - Tháng 6',
      '2023 - Tháng 7',
      '2023 - Tháng 8',
      '2023 - Tháng 9',
      '2023 - Tháng 10',
      '2023 - Tháng 11',
      '2023 - Tháng 12',
    ],
    datasets: [
      {
        label: 'Số lượng bạn đọc',
        data: [
          50, 60, 55, 70, 65, 75, 80, 90, 85, 95, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230,
        ], // Số liệu tương ứng với từng tháng
        backgroundColor: '#36A2EB',
      },
    ],
  };
  const readersBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Thời gian (Năm - Tháng)', // Đổi tiêu đề của trục x nếu cần
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Số bạn đọc',
        },
      },
    },
  };

  const booksLineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Thời gian (Năm - Tháng)',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Số lượng sách',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  return (
    <div>
      <button
        className="btn my-3"
        onClick={() => handleToggleImport('Thống kê bạn đọc')}
        style={{
          marginLeft: '13.889vw',
          backgroundColor: activeButton === 'Thống kê bạn đọc' ? 'green' : 'white',
          color: activeButton === 'Thống kê bạn đọc' ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Thống kê bạn đọc
      </button>
      <button
        className="btn my-3"
        onClick={() => handleToggleImport('Thống kê sách')}
        style={{
          marginLeft: '1vw',
          backgroundColor: activeButton === 'Thống kê sách' ? 'green' : 'white',
          color: activeButton === 'Thống kê sách' ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Thống kê sách
      </button>
      <button
        className="btn my-3"
        onClick={() => handleToggleImport('Thống kê sách mượn')}
        style={{
          marginLeft: '1vw',
          backgroundColor: activeButton === 'Thống kê sách mượn' ? 'green' : 'white',
          color: activeButton === 'Thống kê sách mượn' ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Thống kê sách mượn
      </button>
      <button
        className="btn my-3"
        onClick={() => handleToggleImport('Thống kê sách mượn quá hạn')}
        style={{
          marginLeft: '1vw',
          backgroundColor: activeButton === 'Thống kê sách mượn quá hạn' ? 'green' : 'white',
          color: activeButton === 'Thống kê sách mượn quá hạn' ? 'white' : 'black',
          border: '1px solid green',
        }}
      >
        Thống kê sách mượn quá hạn
      </button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1.389vw',
          marginLeft: '13.889vw',
          marginRight: '13.889vw',
        }}
      >
        <button className="btn btn-secondary" onClick={handlePrint}>
          <i className="fas fa-print"></i> In báo cáo
        </button>
      </div>

      <div style={{ paddingLeft: '13.889vw', paddingRight: '13.889vw' }}>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <div style={{ marginRight: '20px' }}>
            <div className="form-group">
              <label htmlFor="yearSelect">Năm</label>
              <select className="form-control" id="yearSelect" value={selectedYear} onChange={handleYearChange}>
                <option value="">Tất cả</option>
                {/* Add more years as needed */}
              </select>
            </div>
            <div className="form-group" style={{ marginTop: '10px' }}>
              <label htmlFor="monthSelect">Tháng</label>
              <select className="form-control" id="monthSelect" value={selectedMonth} onChange={handleMonthChange}>
                <option value="">Tất cả</option>
                {/* Add months options */}
              </select>
            </div>
            {activeButton !== 'Thống kê bạn đọc' && (
              <>
                <div className="form-group" style={{ marginTop: '10px' }}>
                  <label htmlFor="genreSelect">Thể loại</label>
                  <select className="form-control" id="genreSelect" value={selectedGenre} onChange={handleGenreChange}>
                    <option value="">Tất cả</option>
                    {/* Add more genres as needed */}
                  </select>
                </div>

                <div className="form-group" style={{ marginTop: '10px' }}>
                  <label htmlFor="publisherSelect">Nhà xuất bản</label>
                  <select
                    className="form-control"
                    id="publisherSelect"
                    value={selectedPublisher}
                    onChange={handlePublisherChange}
                  >
                    <option value="">Tất cả</option>
                    {/* Add more publishers as needed */}
                  </select>
                </div>
              </>
            )}
          </div>

          {activeButton === 'Thống kê bạn đọc' ? (
            <div className="card" style={{ width: '85%', margin: '20px auto' }}>
              <div className="card-header">
                <h5 className="card-title">Thống kê số lượng bạn đọc theo thời gian</h5>
              </div>
              <div className="card-body">
                <div style={{ height: '320px' }}>
                  <Bar data={readersBarData} options={readersBarOptions} />
                </div>
              </div>
            </div>
          ) : activeButton === 'Thống kê sách' ? (
            <div className="card" style={{ width: '85%', margin: '20px auto' }}>
              <div className="card-header">
                <h5 className="card-title">Thống kê số lượng sách theo thời gian</h5>
              </div>
              <div className="card-body">
                <div style={{ height: '320px' }}>
                  <Line data={booksLineData} options={booksLineOptions} />
                </div>
              </div>
            </div>
          ) : activeButton === 'Thống kê sách mượn' ? (
            <div className="card" style={{ width: '85%', margin: '20px auto' }}>
              <div className="card-header">
                <h5 className="card-title">Thống kê số lượng sách mượn theo thời gian</h5>
              </div>
              <div className="card-body">
                <div style={{ height: '320px' }}>
                  <Line data={borrowedBooksAreaData} options={borrowedBooksAreaOptions} />
                </div>
              </div>
            </div>
          ) : (
            activeButton === 'Thống kê sách mượn quá hạn' && (
              <div className="card" style={{ width: '85%', margin: '20px auto' }}>
                <div className="card-header">
                  <h5 className="card-title">Thống kê sách mượn quá hạn theo thời gian</h5>
                </div>
                <div className="card-body">
                  <div style={{ height: '320px' }}>
                    <Bar data={overdueBarData} options={overdueBarOptions} />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default BaoCao;
