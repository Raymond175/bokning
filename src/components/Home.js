import React from "react";
import "primeflex/primeflex.css";

function Home() {
    return (
        <div className="p-grid">
            <div className="p-col">Frontend utvecklare</div>
            <div className="p-col">bild</div>
            <div className="p-col">
                <img src="mainPic.png" className="homePic" alt="me" width="704" height="864"/>
            </div>
        </div>
    );
}

export default Home;
