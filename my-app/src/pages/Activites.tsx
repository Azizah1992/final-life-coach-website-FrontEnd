import { useContext } from "react"
import { lifeContext } from "../Utlis/LifeContext"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import retret from '../photo/retret.png';
import liffe from '../photo/liffe.png';
import leader from '../photo/liffe.png';
import gather from '../photo/gather.png';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Carousel from 'react-bootstrap/Carousel';

export function ActivityPage() {
    const {activites} = useContext(lifeContext)

    return(
        <div>
            <Navbar/>
       {activites.map((activites: any) => (
         < div>   
           <div>
          
           </div> 
           <div>
           <Carousel>
      <Carousel.Item>
       
      <img className="busness2-photo" src={retret} alt="Insta" srcSet="" width="90%" height="30%" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="health1-photo" src={liffe} alt="Insta" srcSet="" width="90%" height="30%" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="health1-photo" src={leader} alt="Insta" srcSet="" width="90%" height="30%" />

        <Carousel.Caption>
          <h3>expline</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="health1-photo" src={gather} alt="Insta" srcSet="" width="90%" height="30%" />

        <Carousel.Caption>
          {/* <h3>expline</h3> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
               </div> 
               <div>
         
         </div>
         <Card className="text-center">
      <Card.Header><h3>{activites.activity_name}</h3></Card.Header>
      <Card.Body>
        <Card.Title>Activity Information</Card.Title>
        <Card.Text>
       <h4>Time</h4> {activites.activity_time}<br></br>
       <h4>Activity Leader</h4> {activites.activity_leader}
        </Card.Text>
        <Button variant="primary">Go To Booking now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    <Footer/>
           </ div>
       
          
          
        ))}
</div>
      
    )
}