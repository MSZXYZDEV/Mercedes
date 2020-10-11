import React from "react";
import '../style/Assortment.css'
import ClasALim from '../assets/imgs/Image 24.png'
import ClasAComp from '../assets/imgs/GLC.png'
import ClasBS from '../assets/imgs/image4.png'
import ClasG from '../assets/imgs/GLC.png'
import ClasGC from '../assets/imgs/GLCCoupe.png';
// import Home from '../pages/Home'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import car from '../assets/imgs/Image 10.png'
const Assortment = () => {
  return (
    <Router>
    <div>
      <section>
      <div className="Cars">
        <p>Klasa A Kompaktowa Limuzyna</p>
        <img src={ClasAComp} alt="" className="car"/>
        <NavLink to="/" className="car__link">Zobacz więcej</NavLink>
      </div>
      <div className="Cars">
        <p>Klasa A Limuzyna</p>
        <img src={ClasALim} alt="" className="car"/>
        <NavLink to="/" className="car__link">Zobacz więcej</NavLink>
      </div>
      <div className="Cars">
        <p>Klasa B Sports Tourer</p>
        <img src={ClasBS} alt="" className="car"/>
        <NavLink to="/" className="car__link">Zobacz więcej</NavLink>
      </div>
      <div className="Cars">
        <p>Klasa G</p>
        <img src={ClasG} alt="" className="car"/>
        <NavLink to="/" className="car__link">Zobacz więcej</NavLink>
      </div>
      <div className="Cars">
        <p>Klasa</p>
        <img src={car} alt="" className="car"/>
        <NavLink to="/" className="car__link">Zobacz więcej</NavLink>
      </div>
      <div className="Cars">
        <p>Klasa</p>
        <img src={car} alt="" className="car"/>
        <NavLink to="/" className="car__link">Zobacz więcej</NavLink>
      </div>
      <div className="Cars">
        <p>GLC Coupé</p>
        <img src={ClasGC} alt="" className="car"/>
        <NavLink to="/" className="car__link">Zobacz więcej</NavLink>
      </div>
      <div className="Cars">
        <p>Klasa</p>
        <img src={car} alt="" className="car"/>
        <NavLink to="/" className="car__link">Zobacz więcej</NavLink>
      </div>
      <div className="Cars">
        <p>Klasa</p>
        <img src={car} alt="" className="car"/>
        <NavLink to="/" className="car__link">Zobacz więcej</NavLink>
      </div>
      </section>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
      </Switch>
    </div>
    </Router>
  );
};

export default Assortment;
