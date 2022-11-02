import React, { useState } from "react";
import LikeButton from "./LikeButton";
import Timer from "./Timer";

const Comment = (props) => {


  return (
    <div>
        <p><Timer/> <b>{props.title}</b> <LikeButton/></p>
    </div>
  );
};

export default Comment;
