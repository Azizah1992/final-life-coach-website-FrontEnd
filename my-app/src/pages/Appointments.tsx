import { useContext } from "react"
import { lifeContext } from "../Utlis/LifeContext"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function AppointmentsPage() {
    const {appointments} = useContext(lifeContext)

    return(
        <div>
            <Navbar/>
       {appointments.map((appointments: any) => (
         < div>   
           <div>
               {/* {appointments.title}
               {appointments.description} */}
           </div> 
           <div>
           {/* {appointments.time} */}
               </div> 

               <Card className="text-center">
      <Card.Header><h3> {appointments.title}</h3></Card.Header>
      <Card.Body>
        <Card.Title>Activity Information</Card.Title>
        <Card.Text>
       <h4>Time</h4>  {appointments.description}<br></br>
       <h4>Activity Leader</h4>  {appointments.time}
        </Card.Text>
        <Button variant="primary">Go To Booking now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  
           </ div>
           
        
          
        ))}
        <Footer/>
</div>
      
    )
}