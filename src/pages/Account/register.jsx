import React from "react";

function Registeration() {

  return (
    <div className="reg-div">
      <h1>Register</h1>
      <div className="login-div">
        <h3> Use Email</h3>
        <input type="email" name="Email" placeholder="Enter your email" />
        <h3>Set a Password</h3>
        <input type="password" name="password" placeholder="Password" />
        <br />
        <button className="login-btn" type="submit"> Sign Up </button>
        <br />

        <div className="continueWithReg">
          <h3> Continue with </h3>
          <button className="login-btn" type="submit"> Google </button>
          <button className="login-btn" type="submit"> Apple </button>
        </div>

      </div>

    </div>
  );
}


export default Registeration;