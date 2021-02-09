import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

//rootreducer 생성 ==> 기존에 만든 리듀서를 합침
//파일 이름을 index로 설정하면 import 시 디렉터리 이름까지만 입력하여 불러올 수 있음 ex) import rootReducer from './modules';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
