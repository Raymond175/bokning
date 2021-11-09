import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { render } from "react-dom";
import { stateStore, history } from "./ducks";
import { Provider } from "react-redux";
import { addLocale } from 'primereact/api';


addLocale('sv', {
    firstDayOfWeek: 1,
    dayNames: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag',],
    dayNamesShort: ['sön', 'mån', 'tis', 'ons', 'tors', 'fre', 'lör'],
    dayNamesMin: ['S', 'M', 'Ti', 'O', 'To', 'F', 'L'],
    monthNames: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
    monthNamesShort: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'dec'],
    today: 'Idag',
    clear: 'klar'
});
render(
    <Provider store={stateStore}>
        <App history={history} />
    </Provider>,
    document.getElementById("root"),
);

reportWebVitals();