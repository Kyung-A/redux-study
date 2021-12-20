import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrease, increase, setDiff } from "../modules/counter";
import Counter from "../components/Counter";

// 컨테이너 컴포넌트에는 HTML 태그 포함 X
// 기능들을 import 하는 컴포넌트임 (프레젠테이셔널 컴포넌트)

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회
  // state = store.getState() 결과물과 동일
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook
  const dispatch = useDispatch();

  // 각 액션들을 발생시키는 (디스패치) 함수 작성
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
