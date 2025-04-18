import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { loginRequest, loginSuccess, loginFailure } from './authSlice';
const baseUrl = process.env.REACT_APP_API_BASE_URL;

function* handleLogin(action: ReturnType<typeof loginRequest>): Generator<any, void, any> {
  try {
    const { username, password } = action.payload;
    const response = yield call(axios.post, `${baseUrl}/login`, { username, password });
    yield put(loginSuccess(response.data));
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export default function* authSaga(): Generator {
  yield takeEvery(loginRequest.type, handleLogin);
}
