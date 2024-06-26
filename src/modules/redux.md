## [벨로퍼트와 함께하는 모던 리액트 : 리덕스](https://react.vlpt.us/redux/)

### 리덕스는 언제 써야할까?

프로젝트의 규모가 큰가?  
Yes: 리덕스
No: Context API

비동기 작업을 자주 하게 되는가?  
Yes: 리덕스  
No: Context API

리덕스를 배워보니까 사용하는게 편한가?  
Yes: 리덕스  
No: Context API 또는 MobX

### 리덕스 미들웨어

- 액션이 디스패치 된 다음, 리듀서에서 해당 액션을 받아와서 업데이트하기 전에 추가적인 작업을 할 수 있음.
- 여기서 언급한 추가적인 작업들은 다음과 같은 것들이 있습니다.
  - 특정 조건에 따라 액션이 무시되게 만들 수 있습니다.
  - 액션을 콘솔에 출력하거나, 서버쪽에 로깅을 할 수 있습니다.
  - 액션이 디스패치 됐을 때 이를 수정해서 리듀서에게 전달되도록 할 수 있습니다.
  - 특정 액션이 발생했을 때 이에 기반하여 다른 액션이 발생되도록 할 수 있습니다.
  - 특정 액션이 발생했을 때 특정 자바스크립트 함수를 실행시킬 수 있습니다.
- 보통 리덕스에서 미들웨어를 사용하는 주된 사용 용도는 비동기 작업을 처리 할 때
- 비동기 작업에 관련된 미들웨어 라이브러리는 [redux-thunk](https://github.com/reduxjs/redux-thunk), [redux-saga](https://github.com/redux-saga/redux-saga), [redux-observable](https://redux-observable.js.org/), [redux-promise-middleware](https://www.npmjs.com/package/redux-promise-middleware) 등
- 리덕스 관련 값들을 콘솔에 로깅하는건 이렇게 직접 만드는 것 보단 [redux-logger](https://github.com/LogRocket/redux-logger) 라는 미들웨어를 사용
