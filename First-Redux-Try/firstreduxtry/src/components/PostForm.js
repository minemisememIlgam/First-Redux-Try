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
  const handleRemoveClick = (index) => {
    setArray((prevArray) => prevArray.filter((_, i) => i !== index)); //здесь мы задаем условие что если i в массиве равняется заданному индексу то мы его в новый массив не включаем
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
        {array.map((title) => (
          <Post posts={title} />
        ))}
      </div>
      <button className="btn btn-success" type="submit" onClick={wasClicked}>
        Vytvorit
      </button>
      <button
        className="btn btn-success"
        type="submit"
        onClick={() => handleRemoveClick(array.length - 1)} //сюда мы пишем индекс и исключаем число если элемент по счету совпадает с индексом (в данном случае индекс это последнее число в массиве array.length -1)
      >
        odebrat
      </button>
    </div>
  );
}

export default PostForm;
