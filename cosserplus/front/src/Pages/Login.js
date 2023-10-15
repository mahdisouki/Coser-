import React from 'react'
import { useState, useContext } from 'react'
import { useEffect } from 'react';
// import { GlobalState } from '../GlobalState';
import "./Login.css"
import axios from 'axios';
function Login() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  
  });
  // const state = useContext(GlobalState);
 const [Email, setEmail]= useState("");
 const [Motpasse, setMotpasse]= useState("");
 
//  const setToken = state.setToken;
const onSubmit = (e)=>{
    e.preventDefault();
    const data = {
      email : Email,
      password : Motpasse

    }
    axios.post("http://localhost:5000/user/login" , data).then(
      res=>{
        console.log("response",res.data.accesstoken)
        localStorage.setItem('isLogged' , true)
        localStorage.setItem('token', res.data.accesstoken )
        window.location.href ="/dashboard";

        


      }
    ).catch(err=>{console.log(err.response.data);alert(err.response.data.msg)})
    console.log(Email,Motpasse)

    
    
    
}
  return (
    <div className="gradient-custom"   >
<section   >
  <div className="container py-5 h-100" st>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5" style={{paddingTop: "100px"}}>
        <div className="bg-dark text-white" style={{borderRadius: '1rem' , backgroundColor:"black"}}>
          <div className="card-body p-5 text-center">
            <form onSubmit={onSubmit} className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase" style={{color:'white', whight:'bolder'}} >Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg"onChange={(e)=>{setEmail(e.target.value)}}  />
                <label className="form-label" htmlFor="typeEmailX" >Email</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={(e)=>{setMotpasse(e.target.value)}} />
                <label className="form-label" htmlFor="typePasswordX" >Password</label>
              </div>
        
              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a  className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                <a  className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                <a  className="text-white"><i className="fab fa-google fa-lg" /></a>
              </div>
            </form>
            <div>
    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Login
