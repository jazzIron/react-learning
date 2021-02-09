import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./../modules/counter";

//useSelector Hook 사용하면 리덕스 상태를 조회 할 수 있음
//userDispatch Hook 사용하면 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있음
//userDispatch 사용 시 꼭 useCallback과 함께 사용

//useSelector를 사용하면 최적화 작업이 자동으로 이루어지지 않음
//**성능 최적화를 위해 React.memo를 컨테이너 컴포넌트에 사용해야함

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default React.memo(CounterContainer);
