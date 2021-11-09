export const name = "session";

const initialState = { isLoggedIn: false, username: undefined };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
      };
    default:
      return state;
  }
}

export function isLoggedIn(state) {
  return state[name].isLoggedIn;
}
export function getUsername(state) {
  return state.session.username;
}

export function loginAction(username) {
  return {
    type: "LOGIN",
    payload: username,
  };
}

export function logoutAction() {
  return {
    type: "LOGOUT",
  };
}
