import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../../components/redux_example/Counter";
import { increaseAsync, decreaseAsync, setDiff } from "../../modules/counter";

function CounterContainer() {
  // CounterContainer에서는 사실상 useSelector Hook 을 통해 매번 렌더링 될 때마다
  // 새로운 객체 { number, diff }를 만드는 것이기 때문에 상태가 바뀌었는지 바뀌지 않았는지
  // 확인을 할 수 없어서 낭비 렌더링이 이루어지고 있는 것 입니다.
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual // 객체 안의 가장 겉에 있는 값들을 모두 비교, 최적화를 위함.
    // 또는 useSelector를 여러번 호출
  );

  const dispatch = useDispatch();
  // redux-thunk 사용
  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };
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
