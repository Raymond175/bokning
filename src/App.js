import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import {Footer} from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
      <div>
        <HashRouter>
          <Navbar />
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route path="/projects" render={() => <Projects />} />
                <Route path="/about" render={() => <About />} />
                <Route path="/contact" render={() => <Contact />} />
            </Switch>
          <Footer />
        </HashRouter>
      </div>
  );
}

export default App;
