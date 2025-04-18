// src/redux/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginPayload {
  username: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  user: object | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginPayload>) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<object>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      state.loading = false;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
