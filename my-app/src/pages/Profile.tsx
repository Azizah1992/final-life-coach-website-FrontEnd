import React, { useContext } from "react"
import { lifeContext } from "../Utlis/LifeContext"
import "../styles/Profile.css";
import avatar from '../photo/avatar.png';

// import { faHome } from "@fortawesome/free-solid-svg-icons";

interface UserProps {
    email: string;
  }

export function ProfilePage() {
    const {profile} = useContext(lifeContext)
    let userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")

    return(
        <div>
{/* {users.map((users: any) => ( */}
         < div>   
           <div className="container-profile">
             <div className="avatar-conatiner">
             <img className="avatar-photo" src={avatar} alt="Insta" srcSet="" width="80px" height="80px" />
             {/* </div> */}
            <h1 className="hello-profile"> Hello {profile.name}</h1>
           {/* <div className="person-info"> */}
            <h1 className="this-word">This is your secret information</h1>
              <h3 className="profile-phone"> your phon is :{profile.phone}</h3>
           </div> 
           <div>
            <h3 className="profile-eamil"> your email is :{profile.email}</h3> 
               </div> 
               <div>
            <h3 className="profile-pass"> your password is :{profile.password}</h3> 
               </div> 
               <div>
          <h3 className="profile-gender"> your gendr is :{profile.gender}</h3> 
               </div> 

               <div>
          <h3 className="profile-role">The role is :{profile.role}</h3> 
               </div> 
               
           </ div>
           </div> 
           {/* </div> */}
   
        {/* ))} */}

        <div>
           
            {/* <FontAwesomeIcon icon={faHome} /> */}
            </div>
        </div>

        
     
    )
}