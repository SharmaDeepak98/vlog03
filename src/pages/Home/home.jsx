import React from "react";
import { Link } from "react-router-dom";

function Home(){


  return(
    <div className="home">
      <h1>Home page</h1>

      <Link to="/account/login"> <button className="ls-btn"> LogIn/SignUp </button> </Link>


    </div>
  );

}

export default Home;