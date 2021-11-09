import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import localStorageMiddleware from "../middleware/localStorage";
import * as sessionDuck from "./session";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import * as userDuck from "./user";
import * as bookingsDuck from "./bookings";

export const history = createBrowserHistory();
function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    [sessionDuck.name]: sessionDuck.reducer,
    [userDuck.name]: userDuck.reducer,
    [bookingsDuck.name]: bookingsDuck.reducer,
  });
}

const devtoolsEnhancer = composeWithDevTools({
  name: "Test app",
});

const storeEnhancer = devtoolsEnhancer(
  applyMiddleware(routerMiddleware(history), localStorageMiddleware),
);

const preloadedState = JSON.parse(localStorage.getItem("state") || "{}");

export const stateStore = createStore(
  rootReducer(history),
  preloadedState,
  storeEnhancer,
);
