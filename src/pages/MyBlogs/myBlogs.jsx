import React from "react";
import { Link } from "react-router-dom";


function MyBlogs(){

  

  return(
    <div>

      <h1>My old Blogs </h1>
      
      <Link to="/myBlogs/1">blog 1</Link>
      <br />
      <Link to="/myBlogs/2">blog 2</Link>

    </div>
  );
}

export default MyBlogs;