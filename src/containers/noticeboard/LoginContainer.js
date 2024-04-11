import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register, changeStatus } from "../../modules/noticeboard/auth";
import LoginForm from "../../components/noticeboard/auth/LoginForm";

export default function LoginContainer({ type }) {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogin = (username, password) => dispatch(login(username, password));
  const onRegister = (username, password) => dispatch(register(username, password));
  const onChangeStatus = (status) => dispatch(changeStatus(status));

  return (
    <LoginForm
      type={type}
      onLogin={onLogin}
      onRegister={onRegister}
      onChangeStatus={onChangeStatus}
      status={status}
    />
  );
}
