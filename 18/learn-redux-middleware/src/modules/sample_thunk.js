import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from './../lib/createRequestThunk';

//액션 타입 선언
//한 요청당 3개를 만들어야함

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USER';
const GET_USERS_SUCCESS = 'sample/GET_USER_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USER_FAILURE';

//thunk 함수 생성
//thunk 함수 내부에서는 시작할 때, 성공, 실패했을 때 다른 액션을 디스패치 함

// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST });
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     }); //요청 성공
//   } catch (error) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: error,
//       error: true,
//     }); // 에러발생
//     throw error;
//   }
// };

// export const getUsers = () => async dispatch => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     }); //요청 성공
//   } catch (error) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: error,
//       error: true,
//     }); // 에러발생
//     throw error;
//   }
// };

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initialState = {
  //   loading: {
  //     GET_POST: false,
  //     GET_USERS: false,
  //   },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    // [GET_POST]: state => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_POST: true, //요청 시작
    //   },
    // }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      //   loading: {
      //     ...state.loading,
      //     GET_POST: false,
      //   },
      post: action.payload,
    }),
    // [GET_POST_FAILURE]: state => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_POST: false,
    //   },
    // }),
    // [GET_USERS]: state => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: true,
    //   },
    // }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      //   loading: {
      //     ...state.loading,
      //     GET_POST: false,
      //   },
      users: action.payload,
    }),
    // [GET_USERS_FAILURE]: state => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: false,
    //   },
    // }),
  },
  initialState
);

export default sample;
