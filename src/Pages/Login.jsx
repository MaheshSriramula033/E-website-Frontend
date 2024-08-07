import React from 'react'
import './CSS/Login.css'
const Login = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fileds">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />     
        </div>
        <button className="login-signup-button">Sign Up</button>
        <p className="login-signup-text">Already have an account? <span>Login here</span></p>
         <div className="login-signup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
         </div>
      </div>  
    </div>
  )
}

export default Login

