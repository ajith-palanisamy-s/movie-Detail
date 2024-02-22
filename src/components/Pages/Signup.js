
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Signin.css'


const Signup = () => {
  return (
    <div className='sgn'>
    <div class="form-wrapper">
        <h2>Sign up</h2>
        <form action="#">
            <div class="form-control">
                <input type="email" required/>
                <label>Email</label>
            </div>
            <div class="form-control">
                <input type="text" required/>
                <label>Username</label>
            </div>
            <div class="form-control">
                <input type="password" required/>
                <label>Password</label>
            </div>
            <button type="submit">Sign Up</button>
            <div class="form-help"> 
                <div class="remember-me">
                    <input type="checkbox" id="remember-me"/>
                    <label for="remember-me">Remember me</label>
                </div>
               
            </div>
        </form>
        <p>Already had an account? <NavLink
          
          to="/Signin"
          style={{color:'blue'}}
         
        >
         Sign In Now
        </NavLink></p>
        
    </div>
    </div>
  )
}

export default Signup
