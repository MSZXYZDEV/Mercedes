import React from "react";
import "./style/App.css";
import logo from "./assets/imgs/mercedes.png";
import Assortment from "./pages/Assortment";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <img src={logo} alt="logo mercedes" className="logo" />
          <h4 className="logo__name">The best or nothing</h4>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" exact>
                    Strona główna
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Assortment">Assortment</NavLink>
                </li>
              </ul>
            </nav>
          <button className="nav__Search">Search</button>
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Assortment" component={Assortment} />
            <Route component={NotFound} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
