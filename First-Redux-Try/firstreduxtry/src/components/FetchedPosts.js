import React from "react";
import Post from "./Post";
export default ({ posts }) => {
  return posts.length > 0 ? (
    posts.map((elem) => <Post posts={elem} key={elem} />)
  ) : (
    <button className="btn btn-primary">Pridat</button>
  );
};
