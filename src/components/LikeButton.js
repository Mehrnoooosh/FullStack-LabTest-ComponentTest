import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(0);
  return (
    <span>
      <button
        className="btn btn-info btn-sm"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like
      </button>{" "}
      <b>{like}</b> Likes
    </span>
  );
};
export default LikeButton;
