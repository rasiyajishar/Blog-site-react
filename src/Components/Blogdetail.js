import React from 'react'
import { useContext } from "react";
import { myContext } from "../App";
import { useParams } from 'react-router-dom';

const Blogdetail = () => {
  const {post} = useContext(myContext);
  const { id } = useParams()
  return (
    <div  className="blogdetail-container" >
      <h1 className="blogdetail-title">{post[id].title}</h1>
      <p className="blogdetail-content">{post[id].content}</p>
    </div>
  )
}

export default Blogdetail