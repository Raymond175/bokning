import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { getUsername } from "../ducks/session";
import {deleteBooking, getBookings} from "../ducks/bookings";
import {Button} from "primereact/button";

function Home() {
  const dispatch = useDispatch();
  const stateUsername = useSelector(getUsername);
  const myBookings = useSelector(getBookings).filter(book => book.username === stateUsername);

  function handleDeleteDate(id){
    dispatch(deleteBooking(id));
  }

  return (
    <div className="homeBody">
      <h3 className="homeH3">Välkommen, {stateUsername}!</h3>
        <p className="homeP">Din/a bokningar: </p>
        {myBookings.map((book) => {
          return (
              <div className="homeDiv">
                <p key={book.date}>{`Datum ${book.date} klockan ${book.hour} `}</p>
                <Button
                    label="x"
                    className="homeBtn p-button-danger"
                    type="button"
                    onClick={() => handleDeleteDate(book.id)}
                />
              </div>
          )
        })}
    </div>
  );
}

export default Home;
