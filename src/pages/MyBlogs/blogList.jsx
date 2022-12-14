import React from "react";
import { useParams } from "react-router-dom";

function BlogList() {
  const { id } = useParams();

  return (
    <div>
      <h3>Blogs No {id}. By Mahesh Bogati</h3>
      {/* {console.log("Blogs " + id)} */}
    </div>

  );
}

export default BlogList;