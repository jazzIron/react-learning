import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';
import createRequestSaga from './../lib/createRequestSaga';

//액션 타입 선언
//한 요청당 3개를 만들어야함

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USER';
const GET_USERS_SUCCESS = 'sample/GET_USER_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USER_FAILURE';

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// function* getPostSaga(action) {
//   yield put(startLoading(GET_POST)); //로딩시작
//   //파라미터로 action을 받아 오면 액션의 정보를 조회 할 수 있음
//   try {
//     // call을 사용하면 Promise를 반환 하는 함수를 호출하고, 기다릴수 있음
//     // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수
//     const post = yield call(api.getPost, action.payload); // api.getPost(action.payload)의미랑 같음
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post.data,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_POST));
// }

// function* getUsersSaga(action) {
//   yield put(startLoading(GET_USERS)); //로딩시작
//   //파라미터로 action을 받아 오면 액션의 정보를 조회 할 수 있음
//   try {
//     // call을 사용하면 Promise를 반환 하는 함수를 호출하고, 기다릴수 있음
//     // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수
//     const post = yield call(api.getUsers); // api.getPost(action.payload)의미랑 같음
//     yield put({
//       type: GET_USERS_SUCCESS,
//       payload: post.data,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_USERS));
// }

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
