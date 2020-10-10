import React from "react";
import car from "../assets/imgs/Image3.png";
import car2 from "../assets/imgs/Image 12.png";
import car3 from "../assets/imgs/Image 13.png";
import car4 from "../assets/imgs/Image 31.png";
const Home = () => {
  return (
    <div>
      <img src={car} alt="Mercedes-Benz AMG GT" className="main__car1" />
      <a href="">Zobacz Więcej</a>
      <main>
        <img src={car2} alt="" className="main__car2 main__cars" />
        <a href="">Zobacz Więcej</a>
        <img src={car3} alt="" className="main__car3 main__cars" />
        <a href="">Zobacz Więcej</a>
      </main>
      <footer>
        <img src={car4} alt="" />
        <a href="">Zobacz więcej</a>
      </footer>
    </div>
  );
};

export default Home;


// import React from "react";
// import car from "../assets/imgs/Image3.png";
// import car2 from "../assets/imgs/Image 12.png";
// import car3 from "../assets/imgs/Image 13.png";
// import car4 from "../assets/imgs/Image 31.png";
// import Assortment from '../pages/Assortment'
// import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
// const Home = () => {
//   return (
//     <Router>
//     <div>
//       <img src={car} alt="Mercedes-Benz AMG GT" className="main__car1" />
//       <NavLink to="/Assortment">Zobacz Więcej</NavLink>
//       <main>
//         <img src={car2} alt="" className="main__car2 main__cars" />
//         <NavLink to="/Assortment">Zobacz Więcej</NavLink>
//         <img src={car3} alt="" className="main__car3 main__cars" />
//         <NavLink to="/Assortment">Zobacz Więcej</NavLink>
//       </main>
//       <footer>
//         <img src={car4} alt="" />
//         <NavLink to="/Assortment">Zobacz więcej</NavLink>
//       </footer>
//       <Switch>
//         <Route path="/Assortment" component={Assortment} />
//       </Switch>
//     </div>
//     </Router>
//   );
// };

// export default Home;
