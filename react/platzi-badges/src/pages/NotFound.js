import React from 'react';

import './styles/NotFound.css';
import logo from '../images/astronauts.svg';
import { Link } from 'react-router-dom';

function NotFound(){
   return (
      <div className="error_container">
         
         <div className="error_text">
            <h1>404: Not Found</h1> 
            <div className="error_badges_buttons">
					<Link to="/" className="btn btn-primary">INICIO</Link>
				</div>
         </div>
         <img className="logo_img" src={logo} alt="astronautas"/>
      </div>
   );
}

export default NotFound;