import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules";

//리덕스를 적용하기 위해 스토어 생성
//Redux DevTools 리덕스 개발 도구 툴 설정 ( composeWithDevTools )
const store = createStore(rootReducer, composeWithDevTools());

//리액트 컴포넌트에서 스토어를 사용하기 위해 Provider 사용
//store를 사용하기 위해 props에 store 전달

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
