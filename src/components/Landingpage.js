import React from "react";
import {Button} from "primereact/button";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";

export default function Landingpage() {
    const dispatch = useDispatch();

    function handleLogin() {
        dispatch(push("/login"));
    }
  return (
    <div className="landingpageBody">
        <h3 className="landingpageH3">Styledrekond</h3>
        <div className="landingpageContent">
            <p className="landingpageP">Logga in för att boka tid hos oss</p>
                <Button
                    label="Logga in"
                    className="p-button-raised p-button-success"
                    onClick={handleLogin}
                />
        </div>
    </div>
  );
}
