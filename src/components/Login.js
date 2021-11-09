import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, isLoggedIn } from "../ducks/session";
import { push } from "connected-react-router";
import { Button } from "primereact/button";
import {InputText} from "primereact/inputtext";


function Login() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(isLoggedIn);

  function handleLogin() {
    dispatch(loginAction(username));
    dispatch(push("/"));
  }
  function handleLogout() {
    dispatch(push("/"));
  }


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
      <div className="loginBody">
          <div className="loginForm">
        <label form="uname">E-post</label>
        <br />
            <InputText
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Skriv e-post..."
            />
        <br />
        <br />
            <label form="pword">Lösenord</label>
        <br />
            <InputText
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Skriv lösenord..." />
        <br />
        <br />
      <div className="LoginBtn">
        {loggedIn ? (
          <Button
            label="Logga ut"
            className="p-button-danger p-button-raised"
            onClick={handleLogout}
          />
        ) : (
          <Button
            label="Logga in"
            className="p-button-raised p-button-success"
            onClick={handleLogin}
            disabled={username === "" || password === ""}
          />
        )}
      </div>
          </div>
      </div>
  );
}
export default Login;
