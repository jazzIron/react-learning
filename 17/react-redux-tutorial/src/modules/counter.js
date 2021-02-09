/**
 * Ducks 패턴 --> 액션타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 작성
 */

// redux-actions  사용
// switch/case => handleActions 사용함
import { createAction, handleActions } from 'redux-actions';

//액션 타입 정의 '모듈이름/액션 이름'
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 함수 생성
//export const increase = () => ({ type: INCREASE });
//export const decrease = () => ({ type: DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//모듈의 초기상태 설정

const initialState = {
  number: 0,
};

//리듀서 함수생성

// switch 형식
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// handleAction 함수
// 첫번째 파라미터 : 각 액션에 대한 업데이트 함수
// 두번째 파라미터 : 초기 상태를 넣어줍니다.
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
