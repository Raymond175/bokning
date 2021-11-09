import Login from "./components/Login";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import { isLoggedIn } from "./ducks/session";
import Landingpage from "./components/Landingpage";
import './App.css';
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import {ConnectedRouter} from "connected-react-router";
import {Route, Switch} from "react-router-dom";
import React from "react";
import Open from "./components/Open";
import Booking from "./components/Booking";
import Products from "./components/Products";
import Vision from "./components/Vision";
import Footer from "./components/Footer";

function App({ history }) {
  const loggedIn = useSelector((state) => isLoggedIn(state));
  return (
      <div>
        <ConnectedRouter history={history} noInitialPop>
          <Navbar />
          <Switch>
            <Route
                exact
                path="/"
                render={() => (loggedIn ? <Home /> : <Landingpage />)}
            />
            <Route path="/login" render={() => <Login />} />
            <Route path="/logout" render={() => <Logout />} />
            <Route path="/bokning" render={() => (loggedIn ? <Booking /> : <Landingpage />)} />
            <Route path="/produkter" render={() => <Products />} />
            <Route path="/oppettider" render={() => <Open />} />
            <Route path="/varvision" render={() => <Vision />} />
          </Switch>
          <Footer />
        </ConnectedRouter>
      </div>
  );
}

export default App;
