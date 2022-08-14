import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginComp } from './components/Login';
import SignupComp from './components/Signup';
// import Signup from './components/Signup';
import { ActivityPage } from './pages/Activites';
import { AppointmentsPage } from './pages/Appointments';
import BlogsPage from './pages/Blogs';
import { CoachesPage } from './pages/Coaches';
import { HomePage } from './pages/Home';
import {LandPage }from "./pages/LandPage";
import { ProductPage } from './pages/Product';
import { ProfilePage } from './pages/Profile';
import { ServisecPage } from './pages/Services';
import { lifeContext } from './Utlis/LifeContext';



function App() {
  const[users ,setUsres] = useState ([])
  const[Coaches ,setCoaches] = useState ([])
  const[activites ,setactivites] = useState ([])
  const[appointments ,setappointments] = useState ([])
  const[profile ,setProfile] = useState ([])




  useEffect (() => {
   getUsers()
   getCoaches()
   getactivites()
   getappointments()
  }, [])

  // useEffect (() => {
  //   getCoaches()
   
  //  }, [])
 


const getUsers = async () => {
  const response = await axios.get("http://localhost:3004/users")
  setUsres(response.data)
  let userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
  setProfile(response.data.find((u:any) => u.user_id == userInfo.userId))

}

const getCoaches = async () => {
  const response = await axios.get("http://localhost:3004/coachs")
  setCoaches(response.data)

}

const getactivites = async () => {
  const response = await axios.get("http://localhost:3004/activites")
  setactivites(response.data)

}

const getappointments = async () => {
  const response = await axios.get("http://localhost:3004/appointments")
  setappointments(response.data)

}


const store ={
  users,
  Coaches,
  activites,
  appointments,
  profile,
  ProfilePage,
  CoachesPage,
  ActivityPage,
  AppointmentsPage,  
}

  return (
   <lifeContext.Provider value={store}>
 
     {/* <Signup/> */}

     
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/coaches" element={<CoachesPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServisecPage />} />
          <Route path="/activities" element={<ActivityPage />} />
          <Route path="/appointment" element={<AppointmentsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/signup" element={<SignupComp />} />
          <Route path="/login" element={<LoginComp />} />
          <Route path="/blogs" element={<BlogsPage />} />


       
        </Routes>
      </lifeContext.Provider>
  
  );
}

export default App;
function getcoaches() {
  throw new Error('Function not implemented.');
}

