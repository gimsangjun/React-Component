// 액션 => store.dispatch => 미들웨어1 => next
// => 미들웨어2 => next => 리듀서 => 스토어
const myLogger = (store) => (next) => (action) => {
  console.log(action);
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달합니다.
  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined
};

export default myLogger;
