import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

// useAction은 react-redux에 내장된 상태로 릴리즈 예정이였으나
// 개발팀에서 필요없다고 판단하여 제외된 Hook

//액션 함수를 액션을 디스패치하는 함수로 변환시킴
export default function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps
  );
}
