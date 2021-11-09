export const name = "bookings";

export const bookingsState = {
    bookings: [],
};

export function reducer(state = bookingsState, action) {
    switch (action.type) {
        case "ADD_BOOKING":
            return {
                ...state,
                bookings: [...state.bookings, action.payload],
            };
        case "DELETE_BOOKING":
            return {
                ...state,
                bookings: state.bookings.filter((booking) => booking.id !== action.payload),
            };
        default:
            return state;
    }
}

// selector
export function getBookings(state) {
    return state[name].bookings;
}

// actions
export function addNewBooking(booking) {
    return {
        type: "ADD_BOOKING",
        payload: booking,
    };
}

export function deleteBooking(id) {
    return {
        type: "DELETE_BOOKING",
        payload: id,
    };
}
