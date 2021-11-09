import React from "react";

function Open() {

    return (
        <div className="openBody">
            <h3 className="openH3">Information</h3>
            <div className="p-grid p-dir-col">
                <div className="p-col">
                    <div className="openContent">
                        <h1>Öppettider</h1>
                        <ul>
                            <li>Måndag 9-18</li>
                            <li>Tisdag 9-18</li>
                            <li>Onsdag 9-18</li>
                            <li>Torsdag 9-18</li>
                            <li>Fredag 9-18</li>
                            <li className="weekend">Helg Stängt</li>
                        </ul>
                    </div>
                </div>
                <div className="p-col">
                    <div className="openContent">
                        <h1>Här hittar du oss</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.91497973771!2d17.77991761606715!3d59.20071928161405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f73af1f365d03%3A0xef1f4f6748be48c5!2sStyledrekond%20Bilv%C3%A5rd%20R%C3%B6nninge%20-%20Bilv%C3%A5rd%20i%20R%C3%B6nninge!5e0!3m2!1ssv!2sse!4v1625058903269!5m2!1ssv!2sse"
                            allowFullScreen="true" loading="lazy" title="Salem" />
                    </div>
                </div>
                <div className="p-col">
                    <div className="openContent">
                        <h1>Kontakt</h1>
                        <ul>
                            <li><a href="https://www.instagram.com/styledrekond/">Instagram</a></li>
                            <li><a href="https://www.instagram.com/styledrekond/">Facebook</a></li>
                            <li><a href="https://www.instagram.com/styledrekond/">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Open;