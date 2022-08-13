import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import "../styles/LandPage.css";
import React from "react";
import { Link } from "react-router-dom";

export function LandPage()
{
    return(
        <div>
            <Navbar />
           

            <div>
    
        
    <div className="hero-section">
    <div className="card-grid">
    <a className="card" href="#">
      <div className="card__background1" > </div>
      <div className="card__content">
        <p className="card__category">Activity</p>
        <h3 className="card__heading">Speend Fun Time</h3>
      </div>
    </a>
    <a className="card" href="#">
      <div className="card__background2"></div>
      <div className="card__content">
        <p className="card__category">Prooduct</p>
        <Link to="/product">
        <h3 className="card__heading">Online Coaching Session</h3>
        </Link>
      </div>
    </a>
    <a className="card" href="#">
      <div className="card__background3"></div>
      <div className="card__content">
        <p className="card__category">Sessions</p>
        <Link to="/home">
        <h3 className="card__heading">Meet our special life coach</h3>
        </Link>
      </div>
    {/* </li> */}
    
    <a className="card" href="#">
      <div className="card__background4" ></div>
      <div className="card__content">
        {/* <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3> */}
      </div>
    </a>
    <a className="card" href="#">
      <div className="card__background5" ></div>
      <div className="card__content">
        {/* <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3> */}
      </div>
    </a>
    </a>

    
    </div>
    </div>
  
    
    
    
    
             
    </div>
    
            <Footer />
        </div>
    )
}