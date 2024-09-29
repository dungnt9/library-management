import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TrangChu from './pages/TrangChu';
import GioiThieu from './pages/GioiThieu';
import TraCuu from './pages/TraCuu';
import QLBanDoc from './pages/QLBanDoc';
import QLDanhMuc from './pages/QLDanhMuc';
import MuonSach from './pages/MuonSach';
import QLSach from './pages/QLSach';
import QLMuonTra from './pages/QLMuonTra';
import BaoCao from './pages/BaoCao';
import TaiKhoan from './pages/TaiKhoan';
import TroGiup from './pages/TroGiup';
import LienHe from './pages/LienHe';
import DangNhap from './pages/DangNhap';
import DangKy from './pages/DangKy';
import DefaultLayout from './layouts/index.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
              <DefaultLayout>
                <TrangChu />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/gioi_thieu"
            element={
              <DefaultLayout>
                <GioiThieu />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/tra_cuu"
            element={
              <DefaultLayout>
                <TraCuu />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/ql_ban_doc"
            element={
              <DefaultLayout>
                <QLBanDoc />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/ql_muon_tra"
            element={
              <DefaultLayout>
                <QLMuonTra />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/ql_danh_muc"
            element={
              <DefaultLayout>
                <QLDanhMuc />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/ql_sach"
            element={
              <DefaultLayout>
                <QLSach />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/muon_sach"
            element={
              <DefaultLayout>
                <MuonSach />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>

          <Route
            path="/bao_cao"
            element={
              <DefaultLayout>
                <BaoCao />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/tai_khoan"
            element={
              <DefaultLayout>
                <TaiKhoan />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/tro_giup"
            element={
              <DefaultLayout>
                <TroGiup />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/lien_he"
            element={
              <DefaultLayout>
                <LienHe />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/dang_nhap"
            element={
              <DefaultLayout>
                <DangNhap />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
          <Route
            path="/dang_ky"
            element={
              <DefaultLayout>
                <DangKy />
              </DefaultLayout>
            }
          >
            {' '}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
