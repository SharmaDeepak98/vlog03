import React from "react";
import { Link } from "react-router-dom";

function LogInOrSignUp() {

  const regTxt = <h3 style={{width:"30%"}}>Not member !!</h3>;

  return (

    <div className="reg-div">

      <h1>Login or Signup</h1>

      <div className="login-div">

        <h3> Email/username </h3> 
        <input type="email" name="Email" placeholder="Enter your email" />
        <h3>Password</h3>
        <input type="password" name="password" placeholder="Password" />
        <br />
        <button className="login-btn" type="submit"> LogIn </button>
        
        <Link to="/account/register" style={{textDecoration:'none'}}>{regTxt}</Link>
        
      </div>

    </div>
  );
}

export default LogInOrSignUp;