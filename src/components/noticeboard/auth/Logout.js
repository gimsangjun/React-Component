import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../../modules/noticeboard/auth";
import { deleteCookie } from "../../../utils/cookieUtils";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    deleteCookie("sessionID");
    navigate("/post");
  }, [dispatch, navigate]);

  return <div>Logout</div>;
}
