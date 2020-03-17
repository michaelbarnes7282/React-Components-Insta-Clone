// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment, changeComment] = useState(props.comments);
  // console.log('comment',comment);
  // console.log("comment section props", props.comments)
  return (
    <div>
      {comment.map((item, index) =>{
        return <Comment comment = {item} key = {index}/>
      }) }
      
      <CommentInput />
    </div>
  );
};

export default CommentSection;
