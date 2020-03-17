// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data.js"

const CommentSection = props => {
  // Add state for the comments
  console.log(props);
  const [comments, setComments] = useState(props.comments);
  // console.log(dummyData);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map( val => (
          <Comment comment={val} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
