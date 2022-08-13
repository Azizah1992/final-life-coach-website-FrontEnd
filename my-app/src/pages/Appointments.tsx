import { useContext } from "react"
import { lifeContext } from "../Utlis/LifeContext"

export function AppointmentsPage() {
    const {appointments} = useContext(lifeContext)

    return(
        <div>
       {appointments.map((appointments: any) => (
         < div>   
           <div>
               {appointments.title}
               {appointments.description}
           </div> 
           <div>
           {appointments.time}
               </div> 
           </ div>
           
          
           
          
        ))}
</div>
      
    )
}