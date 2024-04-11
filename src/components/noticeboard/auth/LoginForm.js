import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  NORMAL,
} from "../../../modules/noticeboard/auth";
import tw from "twin.macro";

export default function LoginForm({ type, onLogin, onRegister, onChangeStatus, status }) {
  // const type = "login" or "register"
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const { username, password, passwordConfirm } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "register" && password !== passwordConfirm) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      setFormData({ ...formData, passwordConfirm: "" });
    } else {
      setPasswordError("");
      type === "login" ? onLogin(username, password) : onRegister(username, password);
      setFormData({ username: "", password: "", passwordConfirm: "" });
    }
  };

  useEffect(() => {
    if (status === LOGIN_SUCCESS) {
      navigate("/post");
      onChangeStatus(NORMAL);
    }
    if (status === REGISTER_SUCCESS) {
      navigate("/login");
      onChangeStatus(NORMAL);
    }
  }, [status, navigate, onChangeStatus]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="border border-gray-300 rounded-md shadow-md p-6 w-96">
        <h1 className="text-2xl font-bold mb-6">{type === "register" ? "회원가입" : "로그인"}</h1>
        {status === LOGIN_FAILURE && type === "login" && (
          <ErrorMsg>로그인이 실패하였습니다.</ErrorMsg>
        )}
        {status === REGISTER_FAILURE && type === "register" && (
          <ErrorMsg>회원가입이 실패하였습니다.</ErrorMsg>
        )}
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <InputWrapper>
            <InputLabel htmlFor="username">아이디:</InputLabel>
            <InputField
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="ID를 입력하세요."
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="password">비밀번호:</InputLabel>
            <InputField
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="비밀번호를 입력하세요."
            />
          </InputWrapper>
          {type === "register" && (
            <InputWrapper>
              <InputLabel htmlFor="passwordConfirm">비밀번호 확인:</InputLabel>
              <InputField
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={handleChange}
                placeholder="비밀번호를 다시 입력하세요."
              />
            </InputWrapper>
          )}
          {passwordError && <ErrorMsg>{passwordError}</ErrorMsg>}
          <SubmitButton type="submit">{type === "login" ? "로그인" : "회원가입"}</SubmitButton>
        </form>
        <div className="mt-4 text-center">
          {type === "login" && (
            <Link to="/registe" className="text-blue-500 hover:underline">
              회원가입
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const ErrorMsg = tw.p`text-red-600 bg-red-100 border border-red-300 rounded-md px-4 py-2 mb-4`;
const InputWrapper = tw.div`mb-4`;
const InputLabel = tw.label`block text-gray-700 font-semibold mb-2`;
const InputField = tw.input`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500`;
const SubmitButton = tw.button`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-700`;

// TODO : validation , 빈칸안됨, header도 logo등 추가, 회원가입시 - 비밀번호 === 비밀번호확인, 이미 가입되어있는사람, 빈칸안됨.
