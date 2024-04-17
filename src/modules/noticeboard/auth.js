// TODO: 나중에 redux-thunk으로 교체해보기, 이미 redux-thunk을 쓴거 같고, 이부분에 대해서 더 공부하고, 더 효율적이로 작성한 벨로퍼트 보고 리팩토링해보기
import axios from "axios";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

// 액션 상태
export const LOGIN_START = "auth/LOGIN_START";
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "auth/LOGIN_FAILURE";
export const SIGNUP_START = "auth/SIGNUP_START";
export const SIGNUP_SUCCESS = "auth/SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "auth/SIGNUP_FAILURE";

// 액션 생성 함수
export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (sessionID, status) => ({
  type: LOGIN_SUCCESS,
  payload: { sessionID, status },
});

export const loginFailure = (status, error) => ({
  type: LOGIN_FAILURE,
  payload: { status, error },
});

export const signUpStart = () => ({
  type: SIGNUP_START,
});

export const signUpSuccess = (status) => ({
  type: SIGNUP_SUCCESS,
  payload: { status },
});

export const signUpFailure = (status, error) => ({
  type: SIGNUP_FAILURE,
  payload: { status, error },
});

// 로그인 비동기 처리
// TODO : 쿠키로 받은 sessionID값을 가지고 post글 작성하는거 해봐야됨, useCook
export const login = (username, password) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await axios.post(`${API_DOMAIN}/auth/login`, { username, password });
      // response.data.sessionID에 담긴 세션아이디를 쿠키에 담기
      // 일반적인 패턴 => 서버로부터 받은 세션 ID를 Redux 상태에 저장하고, 이후에 컴포넌트에서 상태를 확인하여 쿠키를 설정하도록 하는 것이 일반적인 패턴
      dispatch(loginSuccess(response.data, response.status));
    } catch (error) {
      console.log("Login 실패 : ", error);
      dispatch(loginFailure(error.response.status));
    }
  };
};

export const signUp = (username, password) => {
  return async (dispatch) => {
    dispatch(signUpStart());
    try {
      const respose = await axios.post(`${API_DOMAIN}/auth/signup`, { username, password });
      dispatch(signUpSuccess(respose.status));
    } catch (error) {
      console.log("Sign Up 실패 : ", error);
      dispatch(signUpFailure(error.response.status));
    }
  };
};

// 초기 값
const initialState = {
  user: null,
  loading: false,
  status: null,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        sessionID: action.payload.sessionID,
        status: action.payload.status,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        sessionID: null,
        status: action.payload.status,
        error: action.payload.error,
      };
    case SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
