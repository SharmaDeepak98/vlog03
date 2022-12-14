import React, { useState } from "react";
import { Link } from "react-router-dom";




function NavBar() {


  // --------------- nav bar time ----------------
  const time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);

  function setCurrentTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(setCurrentTime, 1000);


  return (

    <div id="navbar-style">

      <h4 style={{ display: "inline", width: "190px", textAlign: "center" }}>{currentTime}</h4>
      <Link className="navele" to="/account"> Account </Link>
      <Link className="navele" to="/myBlogs"> MyBlogs </Link>
      <Link className="navele" to="/"> Home </Link>



    </div>

  );
}

export default NavBar;