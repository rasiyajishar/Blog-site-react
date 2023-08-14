import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../App";
import './Blogscreate.css'

const Blogscreate = () => {
  const { post, setPost } = useContext(myContext);
  const myNavigation = useNavigate();

  function submit(event) {
    event.preventDefault();
    const titles = event.target.title1.value;
    const contents = event.target.text.value;
    setPost([...post, { title: titles, content: contents }]);
    myNavigation("/Bloglist");
  }


  return (
    <div className="blogs-create-container">
      <h1>Create Blog</h1>
      <form onSubmit={(event) => submit(event)}>
        <div>
          <label>Title</label>
          <br></br>
          <input type="text" name="title1" placeholder="Title for blog"></input>
        </div>

        <div>
          <label>Body</label>
          <br></br>
          <textarea name="text" placeholder="content"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Blogscreate;
