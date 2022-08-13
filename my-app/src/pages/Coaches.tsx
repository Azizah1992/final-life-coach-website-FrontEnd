import { useContext } from "react"
import { lifeContext } from "../Utlis/LifeContext"

export function CoachesPage() {
    const {Coaches} = useContext(lifeContext)

    return(
        <div>
       {Coaches.map((Coaches: any) => (
         < div>   
           <div>
               {Coaches.name}
               {Coaches.phone}
           </div> 
           {/* <div>
           {Coaches.email}
               </div>  */}
           </ div>
           
          
           
          
        ))}
</div>
      
    )
}