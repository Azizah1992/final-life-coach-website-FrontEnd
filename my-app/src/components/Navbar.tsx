import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export function Navbar()
{
    return(
        <div>
         

            <div>
      

        <nav id="main-menu">
     <ul className="nav-bar">

     <Link to="/signup">
     <li className="nav-button-home"><a href="#">Sigin in</a></li>
     </Link>
                <Link to="/home">
          <li className="nav-button-home"><a href="#">Home</a></li>
          </Link>
          <Link to="/services">
          <li className="nav-button-home"><a href="#">Services</a></li>
          </Link>
          <Link to="/product">
          <li className="nav-button-home"><a href="#">Products</a></li>
          </Link>
          <li className="nav-button-home"><a href="#">Blogs</a></li>
          <Link to="/activities">
          <li className="nav-button-home"><a href="#">Activitys</a></li>
          </Link>
          <Link to="/appointment">
          <li className="nav-button-home"><a href="#">Appointments</a></li>
          </Link>
     </ul>
</nav>
        </div>
        </div>
    )
}