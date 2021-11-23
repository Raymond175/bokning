import React from "react";
import "primeflex/primeflex.css";


export function Footer() {
    <script src="https://kit.fontawesome.com/e8aa4b0ca7.js" crossOrigin="anonymous" />
    return (
        <footer className="footer">
            <div className="p-grid">
                <div className="p-col">
                    <h2 className="footerPart">Projekt</h2>
                </div>
                <div className="p-col">
                    <h2 className="footerPart">Kontakt</h2>
                    <a href="www.linkedin.com"><i className="fa-brands fa-linkedin"/></a>
                    <a href="tel:+46700989705"><i className="pi pi-phone"/></a>
                    <a href="mailto:raymond99@hotmail.se?subject=Your portfolio looked intresting&body=Hello!"><i className="pi pi-envelope"/></a>
                </div>
            </div>
        </footer>
    );
}

