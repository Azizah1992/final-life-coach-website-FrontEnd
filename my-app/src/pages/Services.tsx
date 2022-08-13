import health from '../photo/health.png';
import health2 from '../photo/health2.png';
import bus from '../photo/bus.png';
import bussnes2 from '../photo/health2.png';
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import "../styles/Services.css";

export function ServisecPage()
{
    return(
        <div>
            <Navbar/>
         
        <img className="health1-photo" src={health} alt="Insta" srcSet="" width="90%" height="30%" />

        <div className="health-intro">
            <h1 className="health-title">What is Health Coaching?</h1>
            <p className="health-description">Health Coaching takes a holistic approach to support the whole person. Your Health Coach helps you to nurture <br></br> your relationship with your body, mind, and spirit to greatly increase your vitality. With a focus on enhancing, preserving and maintaining health, and preventing illness, <br></br>health coaches understand the emotional, physical, behavioral, nutritional and lifestyle factors that are needed to enhance overall health and well-being.</p>
        
        </div>
        <div >
        <img className="health2-photo" src={health2} alt="Insta" srcSet="" width="90%" height="30%" />
        </div>

        <div >
        <img className="busness1-photo" src={bus} alt="Insta" srcSet="" width="90%" height="30%" />
           
        <div className="bussnes-intro">
            <h1 className="bussnes-title">What is Business Coaching?</h1>
            <p className="bussnes-description">Business Coaching is a process of clarifying your values, priorities, and goals for your business. Whether you are just starting a business or need fine-tuning, business coaching provides experienced guidance in leadership development, management, efficiency, scaling, marketing, productivity, increased revenues, exit strategies and work-life balance.</p>
        
        </div> 

        <div>
        <img className="busness2-photo" src={bussnes2} alt="Insta" srcSet="" width="90%" height="30%" />
            </div> 
        </div> 

    

        <Footer/>
        </div>
    )
}