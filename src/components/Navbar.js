import React from "react";
import { Menubar } from "primereact/menubar";
import { useDispatch, useSelector } from "react-redux";
import {getUsername, isLoggedIn} from "../ducks/session";
import { Button } from "primereact/button";
import { push } from "connected-react-router";

export function Navbar() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(isLoggedIn);
  const stateUsername = useSelector(getUsername);

  function handleLogin() {
    dispatch(push("/login"));
  }

  function handleLogout() {
    dispatch(push("/logout"));
  }

  const end = (
      <div className="LoginSection">
        {loggedIn ? (
            <Button
                label={"Logga ut " + stateUsername}
                className="p-button-danger p-button-raised"
                onClick={handleLogout}
            />
        ) : (
            <Button
                label="Logga in"
                className="p-button-raised p-button-success"
                onClick={handleLogin}
            />
        )}
      </div>
  );
  const items = [
    {
      label: "Hem",
      icon: "pi pi-fw pi-home",
      command: () => {
        dispatch(push("/"));
      },
    },
    loggedIn ? {
      label: "Boka",
      icon: "pi pi-calendar-plus",
      command: () => {
        dispatch(push("/bokning"));
      },
    }: null,
    {
      label: "Tjänster",
      icon: "pi pi-fw pi-briefcase",
      command: () => {
        dispatch(push("/produkter"));
      },
    },
    {
      label: "Om oss",
      icon: "pi pi-info",
      items: [
        {
          label: 'Öppettider',
          icon: 'pi pi-clock',
          command: () => {
            dispatch(push("/oppettider"));
          }
        },
        {
          label: 'Vår vision',
          icon: 'pi pi-eye',
          command: () => {
            dispatch(push("/varvision"));
          }
        },
      ]
    },
  ].filter(obj => obj !== null);

    return (
        <div className="main">
          <Menubar model={items}  end={end} />
        </div>
    );

}

export default Navbar;
