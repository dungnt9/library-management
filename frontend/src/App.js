import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUserFromStorage } from './store/userSlice';
import ProtectedRoute from './components/ProtectedRoute';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);
  return (
    <Router>
      <DefaultLayout>
      <div className="App">
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/dang_nhap" element={<DangNhap />} />
        <Route path="/dang_ky" element={<DangKy />} />
        <Route path="/gioi_thieu" element={<GioiThieu />} />
        <Route path="/tra_cuu" element={<TraCuu />} />
        <Route path="/tro_giup" element={<TroGiup />} />
        <Route path="/lien_he" element={<LienHe />} />
        <Route 
          path="/muon_sach" 
          element={
            <ProtectedRoute 
              component={MuonSach} 
              allowedRoles={['user']} 
            />
          } 
        />
        <Route 
          path="/ql_danh_muc" 
          element={
            <ProtectedRoute 
              component={QLDanhMuc} 
              allowedRoles={['librarian']} 
            />
          } 
        />
        <Route 
          path="/ql_sach" 
          element={
            <ProtectedRoute 
              component={QLSach} 
              allowedRoles={['librarian']} 
            />
          } 
        />
        <Route 
          path="/ql_ban_doc" 
          element={
            <ProtectedRoute 
              component={QLBanDoc} 
              allowedRoles={['librarian']} 
            />
          } 
        />
        <Route 
          path="/ql_muon_tra" 
          element={
            <ProtectedRoute 
              component={QLMuonTra} 
              allowedRoles={['librarian']} 
            />
          } 
        />
        <Route 
          path="/bao_cao" 
          element={
            <ProtectedRoute 
              component={BaoCao} 
              allowedRoles={['librarian']} 
            />
          } 
        />
        {/* <Route 
          path="/thong-tin-ca-nhan" 
          element={
            <ProtectedRoute 
              component={ThongTinCaNhan} 
              allowedRoles={['user', 'librarian']} 
            />
          } 
        /> */}
      </Routes>
      </div>
      </DefaultLayout>
    </Router>
  );
}

export default App;
