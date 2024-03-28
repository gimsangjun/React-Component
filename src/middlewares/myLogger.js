// 액션 => store.dispatch => 미들웨어1 => next
// => 미들웨어2 => next => 리듀서 => 스토어
const myLogger = (store) => (next) => (action) => {
  // 미들웨어가 처리할 작업을 수행합니다.
  console.log("Action:", action);

  // 다음 미들웨어로 액션을 전달합니다.
  const result = next(action);

  // 작업이 끝난 후 추가적인 로직을 수행할 수 있습니다.
  console.log("State after action:", store.getState());

  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined
};

export default myLogger;
