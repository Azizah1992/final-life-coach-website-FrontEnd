// "name": "string",
// "phone": "string",
// "email": "string",
// "gender": true,
// "password": "string",
// "role": "string"
import "../styles/Siginup.css";
import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { lifeContext } from '../Utlis/LifeContext'

export default function SignupComp() {
     const navigate = useNavigate
     const {users} = useContext(lifeContext)
     const handleSignUp = async (e: any) => {

        e.preventDefault()
        const form = e.target



        const body ={
            name : form.elements.name.value,
             phone:form.elements.phone.value,
             email:form.elements.email.value,
             password:form.elements.password.value,
             gender:form.elements.gender.value,
             role:"USER",
            }

            let usersEmail= users.map((u:any)=>u.email)

            if(usersEmail.includes(form.elements.email.value)) return alert("this Email alredy regiestered");


           await axios.post("http://localhost:3004/user", body)
        //    navigate("/profile")
        }

    return (
        <div className="form">

<form className="register-form acrylic">
    <span>Sign Up</span>
    <input type="text" placeholder="Email"/>
    <input type="password" placeholder="Password"/>
    <button id="SignUp">Go</button>
    <p className="message"><a href="#">I have Account</a></p>
  </form>
  
          <form onSubmit={handleSignUp} className="login-form acrylic">
            <div>
            <span className="signup-word">Sign Up</span>
                {/* <label htmlFor="">Name</label> */}
                <input type="text" name="name" placeholder="name..." />
            </div>
           
            <div>
                <label htmlFor="">Phone</label>
                <input type="text" name="phone" />

            </div>

            <div>
                <label htmlFor="">Email</label>
                {/* <input type="text" name="email" /> */}
                <input type="text" placeholder="Email" name="email"/>
                
            </div>
            <div>
                <label htmlFor="">Password</label>
                {/* <input type="text" name="password" /> */}
                <input type="password" placeholder="password" name="password"/>

            </div>
            <div>
                <label htmlFor="">gender</label>
                <input type="text" name="gender" />

            </div>

            

           <div>
           <button id="SignIn">Login</button>
            </div>
            </form>
            </div>
            

            
           
    )
}



