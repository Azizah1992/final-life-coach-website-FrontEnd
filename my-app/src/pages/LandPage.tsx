import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import "../styles/LandPage.css";
import coachhero from '../photo/coachhero.png';
import what from '../photo/what.png';
import expline from '../photo/expline.png';
import choch1 from '../photo/choch1.png';
import Carousel from 'react-bootstrap/Carousel';
// import React from "react";
// import { Link } from "react-router-dom";

export function LandPage()
{
    return(
        <div>
            <Navbar /> 
            <div> 

            <Carousel>
      <Carousel.Item>
       
         <img className="health1-photo" src={coachhero} alt="Insta" srcSet="" width="90%" height="30%" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="health1-photo" src={what} alt="Insta" srcSet="" width="90%" height="30%" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="health1-photo" src={expline} alt="Insta" srcSet="" width="90%" height="30%" />

        <Carousel.Caption>
          <h3>expline</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      

    <img className="health1-photo" src={choch1} alt="Insta" srcSet="" width="90%" height="30%" />

    {/* <div className="hero-section">
    <div className="card-grid">
    <a className="card" href="#">
      <div className="card__background1" > </div>
      <div className="card__content">
        <p className="card__category">Activity</p>
        <h3 className="card__heading">Speend Fun Time</h3>
      </div>
    </a> */}
    {/* <a className="card" href="#">
      <div className="card__background2"></div>
      <div className="card__content">
        <p className="card__category">Prooduct</p>
        <Link to="/product">
        <h3 className="card__heading">Online Coaching Session</h3>
        </Link>
      </div>
    </a> */}
    {/* <a className="card" href="#">
      <div className="card__background3"></div>
      <div className="card__content">
        <p className="card__category">Sessions</p>
        <Link to="/home">
        <h3 className="card__heading">Meet our special life coach</h3>
        </Link>
      </div> */}
    {/* </li> */}
    
    {/* <a className="card" href="#">
      <div className="card__background4" ></div>
      <div className="card__content"> */}
        {/* <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3> */}
      {/* </div>
    </a>
    <a className="card" href="#">
      <div className="card__background5" ></div>
      <div className="card__content"> */}
        {/* <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3> */}
      </div>
    {/* </a>
    </a> */}
   <Footer />
    
    </div>
    // </div>   
    )
}