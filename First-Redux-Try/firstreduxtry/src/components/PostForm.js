import React from "react";
import { useState } from "react";
import Post from "./Post";
function PostForm() {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const [title, setTitle] = useState("");
  const changeInputHandler = (event) => {
    setTitle(event.target.value);
  };
  const [array, setArray] = useState([]);
  const wasClicked = () => {
    setArray((prevArray) => [...prevArray, title]);
  };

  return (
    <div>
      <form onSubmit={submitHandler}></form>
      <div className="form-group">
        <label htmlFor="title">Nazev</label>
        <input
          type="text"
          value={title}
          className="form-control"
          id="title"
          onChange={changeInputHandler}
        ></input>
        <p>{title}</p>
      </div>
      <button className="btn btn-success" type="submit" onClick={wasClicked}>
        Vytvorit
      </button>
      <button className="btn btn-success" type="submit">
        odebrat
      </button>
    </div>
  );
}

export default PostForm;
