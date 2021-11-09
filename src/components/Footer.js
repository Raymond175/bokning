import React from "react";
import 'primeflex/primeflex.css';



function Footer() {
    return (
        <footer>
            <div className="innerfooter">
                <div className="footerthird">
                    <h1>Boknings alternativ</h1>
                    <a href="https://www.bokadirekt.se/places/styledrekond-39106">Boka direkt</a>
                    <a href="tel:+46734096761">Ring och boka</a>
                </div>
                <div className="footerthird">
                    <h1>Övrigt</h1>
                    <a href="https://search.google.com/local/writereview?placeid=ChIJA102H69zX0YRxUi-SGdPH-8">Recensera</a>
                    <a href="https://search.google.com/local/reviews?placeid=ChIJA102H69zX0YRxUi-SGdPH-8">Recensioner</a>
                </div>
                <div className="footerthird">
                    <h1>Sociala medier</h1>
                    <li><a href="https://www.facebook.com/Styledbilvard"><i className="pi pi-facebook" /></a></li>
                    <li><a href="https://www.instagram.com/styledrekond/"><i className="pi pi-camera" /></a></li>
                    <li><a href="tel:+46734096761"><i className="pi pi-phone" /></a></li>
                    <li><a href="mailto:info@styledrekond.se?"><i className="pi pi-envelope" /></a></li>
                    <span>
                        Söderby Gårds väg 69<br />
                        144 51 Rönninge<br />
                        Stockholm<br />
                        Sverige<br />
                    </span>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
