import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      localStorage.setItem('isLoggedIn', 'true');
    },
    clearUser: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
      // Xóa thông tin người dùng khỏi localStorage
      localStorage.removeItem('userInfo');
      localStorage.removeItem('isLoggedIn');
    },
    loadUserFromStorage: (state) => {
      const userInfo = localStorage.getItem('userInfo');
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (userInfo && isLoggedIn) {
        state.userInfo = JSON.parse(userInfo);
        state.isLoggedIn = true;
      }
    },
  },
});

export const { setUser, clearUser, loadUserFromStorage } = userSlice.actions;

export default userSlice.reducer;