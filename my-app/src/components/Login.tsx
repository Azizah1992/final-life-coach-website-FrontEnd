import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { lifeContext } from '../Utlis/LifeContext';
import { useForm } from 'react-hook-form';
import "../styles/Login.css";

export  function LoginComp() {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { users } = useContext(lifeContext)
    const handleLogin = async (e: any) => {
		try {
			const userBody = {
				email: e.email,
				password: e.password,
			}
            
            
const response = await axios.post("http://localhost:3004/login", userBody)
// localStorage.setItem("token", response.token)
console.log(response);
let userFind = users.find((u: any) => u.email == e.email)
const userInfo = {
    userId: userFind.user_id,
    email: userFind.email,
    role: response.data.role
}


localStorage.setItem("userInfo", JSON.stringify(userInfo))
			localStorage.setItem("token", response.data.token)
			navigate("/profile")
		} catch (error: any) {
			if (error.response) return console.log(error)
		}
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



       <form onSubmit={handleSubmit(handleLogin)} className="login-form acrylic">
           <label>Email</label>
           <input type="text" {...register("email", { required: true })} />
						
			{errors.email && <p>Please check the Email</p>}
           <label>Password</label>
           <input type="password"{...register("password", { required: true })} />
           {errors.password && <p>Please check the Password</p>}
           <div>
               <button>Submet</button>
           </div>
       </form>
       </div>
    )
    }

    