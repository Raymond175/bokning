import React, {useState} from "react";
import {Calendar} from "primereact/calendar";
import { Dropdown } from 'primereact/dropdown';
import {useDispatch, useSelector} from "react-redux";
import {addNewBooking, getBookings} from "../ducks/bookings";
import {getUsername} from "../ducks/session";
import {Button} from "primereact/button";
import {push} from "connected-react-router";
import {confirmPopup} from 'primereact/confirmpopup';




function Booking() {
    const [booking, setBooking] = useState({date:undefined, hour: undefined});
    const allBookings = useSelector(getBookings);
    const hourSelectItems = [
        {label: '9:00', value: '09'},
        {label: '10:00', value: '10'},
        {label: '11:00', value: '11'},
        {label: '12:00', value: '12'},
        {label: '13:00', value: '13'},
        {label: '14:00', value: '14'},
        {label: '15:00', value: '15'},
        {label: '16:00', value: '16'},
    ];

    const username = useSelector(getUsername);
    const dispatch = useDispatch();

    function availableHours() {
        return hourSelectItems
            .filter(
                (hour) => !allBookings
                    .filter((book) => book.date === booking.date)
                    .map((booking) => booking.hour)
                    .includes(hour.value)
            );
    }

    const confirm = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: `Vill du boka datum ${booking.date} vid klockan ${booking.hour} ?`,
            type: "submit",
            acceptLabel: "Ja",
            rejectLabel: "Nej",
            accept: () => handleBooking(),
            reject: () => null,
        });
    }


    function handleBooking() {
        dispatch(addNewBooking({...booking, username, id:createUUid()}));
        dispatch(push("/"));
    }

    function createUUid(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    return (
        <div className="bookingBody">
            <h3 className="bookingH3">Boka tid</h3>
            <Calendar
                locale="sv"
                dateFormat="dd-mm-yy"
                inline
                value={booking.date}
                disabledDays={[6, 0]}
                onChange={(e) => {
                    setBooking({
                        ...booking,
                        date: e.value.toLocaleDateString("sv")
                    })
                }}
            />
            <br />
            <Dropdown
                className="bookingDropdown"
                value={booking.hour}
                options={availableHours()}
                onChange={(e) => setBooking({...booking, hour: e.target.value})}
                placeholder="Välj tidpunkt"
                disabled={booking.date === undefined}
            />
            <br />
            <Button onClick={confirm} label="Boka" disabled={booking.date === undefined && booking.hour === undefined}/>
        </div>
    );
}

export default Booking;