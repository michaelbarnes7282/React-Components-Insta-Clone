//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data";
const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);
  // console.log(data);
  return (
    <div className="posts-container-wrapper">
      {data.map((p, index) => (
        <Post post = {p} key = {index}/>
      ))}
    </div>
  );
};

export default PostsPage;

