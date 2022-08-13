import { useContext } from "react"
import { lifeContext } from "../Utlis/LifeContext"

export function ActivityPage() {
    const {activites} = useContext(lifeContext)

    return(
        <div>
       {activites.map((activites: any) => (
         < div>   
           <div>
               {activites.activity_name}
               {activites.activity_time}
           </div> 
           <div>
           {activites.activity_leader}
               </div> 
           </ div>
           
          
           
          
        ))}
</div>
      
    )
}