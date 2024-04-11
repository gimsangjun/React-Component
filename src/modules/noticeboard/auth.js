// 상수
export const NORMAL = "NORMAL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// 액션 타입
const LOGIN = "auth/LOGIN";
const LOGOUT = "auth/LOGOUT";
const REGISTER = "auth/REGISTER";
const CHANGE_STATUS = "auth/CHANGE_STATUS";

// 액션 생성 함수
export const login = (username, password) => ({
  type: LOGIN,
  username,
  password,
});

export const logout = () => ({ type: LOGOUT });

export const register = (username, password) => ({
  type: REGISTER,
  username,
  password,
});

export const changeStatus = (status) => ({
  type: CHANGE_STATUS,
  status,
});

// 초기 상태 선언
const initialState = {
  status: NORMAL,
  username: "",
};
// 회원가입한 유저 데이터
const users = [{ username: "test", password: "test" }];

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      const user = users.find(
        (user) => user.username === action.username && user.password === action.password
      );
      if (user) {
        console.log("로그인 성공: ", user);
        return {
          ...state,
          status: LOGIN_SUCCESS,
          username: user.username,
        };
      } else {
        console.log("로그인 실패");
        return {
          ...state,
          status: LOGIN_FAILURE,
          username: "",
        };
      }
    case LOGOUT:
      return {
        ...state,
        status: NORMAL,
        username: "",
      };
    case REGISTER:
      const existingUser = users.find((user) => user.username === action.username);
      if (existingUser) {
        return {
          ...state,
          status: REGISTER_FAILURE, // Set state to REGISTER_FAILURE if user already exists
        };
      } else {
        users.push({ username: action.username, password: action.password });
        console.log("회원가입 성공 : ", users);
        return {
          ...state,
          status: REGISTER_SUCCESS, // Set state to REGISTER_SUCCESS if registration successful
        };
      }
    case CHANGE_STATUS:
      const newStatus = action.status;
      return {
        ...state,
        status: newStatus,
      };
    default:
      return state;
  }
}
