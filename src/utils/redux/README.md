## [벨로퍼트와 함께하는 모던 리액트 : 리덕스](https://react.vlpt.us/redux/)

- 폴더구조 이렇게 해야할듯.

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

### 파일, 폴더에 대한 설명

- modules/counter.js - 리듀서 모듈
- modules/todos.js - 리듀서 모듈
- modules/index.js - 루트 리듀서
  - 리듀서 합치기
  - combineReducers라는 함수를 사용
- src/index.js - 스토어 선언
- components/Counter.js - 프로젠테이셔널 컴포넌트
  - 프리젠테이셔널 컴포넌트에선 주로 이렇게 UI를 선언하는 것에 집중하며, 필요한 값들이나 함수는 props 로 받아와서 사용하는 형태로 구현
- containers/CounterContainer.js - 컨테이너 컴포넌트
  - 주로 상태 및 데이터 로직, 이벤트 처리 로직을 처리함수를 선언하고, 프로젠테이셔널 컴포넌트에 넘김.
- components/Todos.js
- containers/TodosContainer.js
