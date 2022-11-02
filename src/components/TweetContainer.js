import React, { useState } from "react";
import Comment from "./Comment";
const TweetContainer = (props) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    comments.push(comment);
    setComments(comments);
    setComment("");
  };
  return (
    <div className="container text-center mb-5">
      <div className="card">
        <div className="card-header">
          <h5>{props.status}</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                placeholder="type comment ...."
                  className="form-control"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-success w-100">
                  post
                </button>
              </div>
            </div>
          </form>
        </div>
        {comments.length
          ? comments.map((item) => <Comment title={item} />)
          : null}
      </div>
    </div>
  );
};

export default TweetContainer;
