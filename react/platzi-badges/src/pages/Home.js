import React from 'react';

import './styles/Home.css';
import logo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

function Home(){
   return (
      <div className="home_container">
         <div className="home_text">
            <h1>Bienvenido</h1>
            <h3>De click para crear un nuevo batch</h3>
            <div className="home_badges_buttons">
					<Link to="/badges" className="btn btn-primary">BADGES</Link>
				</div>
         </div>
         <img className="logo_img" src={logo} alt="astronautas"/>
      </div>
   );
}

export default Home;