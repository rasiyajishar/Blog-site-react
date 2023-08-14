import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../App";

const Bloglist = () => {
  const {post} = useContext(myContext);
  const myNavigation = useNavigate();
  return (
    <div className="bloglist-container">
      {post.map((value, index) => (
        <div className="bloglist-item" key={index}>
          <li>{value.title}</li>
          <button onClick={() => myNavigation(`/Blogdetail/${index}`)}>read more</button>
        </div>
      ))}
    </div>
  );
};
export default Bloglist;
