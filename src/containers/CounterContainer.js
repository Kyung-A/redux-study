import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { decrease, increase, setDiff } from "../modules/counter";
import Counter from "../components/Counter";

// 컨테이너 컴포넌트에는 HTML 태그 포함 X
// 기능들을 import 하는 컴포넌트임 (프레젠테이셔널 컴포넌트)

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회
  // state = store.getState() 결과물과 동일
  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));

  // 바로 위 코드는 매번 렌더링이 될 때마다 새로운 객체를 만듦 => 최적화 필요
  // 첫번째 방법
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);
  // 두번째 방법
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    // 이전 값과 다음 값을 비교하여 true가 나오면 리렌더링 X, false가 나오면 리렌더링
    shallowEqual
  );

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
