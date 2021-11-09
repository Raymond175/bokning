import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { logoutAction } from "../ducks/session";

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  return <Redirect to="/" />;
}

export default Logout;
