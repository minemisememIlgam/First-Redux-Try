import React from "react";
import Post from "./Post";
export default ({ posts }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-tittle">Title here: {posts} </h5>
      </div>
    </div>
  );
};
