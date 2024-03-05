import React from "react";
import {
  updateNewCommmentActionCreator,
  addCommentActionCreator,
} from "../../data/films-reducer";
import Comments from "./Comments";

const CommentsContainer = (props) => {
  let state = props.state;

  let addComment = () => {
    props.dispatch(addCommentActionCreator());
  };

  let onCommentChange = (author, text) => {

    let updateComment = {
      name: author,
      text: text,
    };

    props.dispatch(updateNewCommmentActionCreator(updateComment));
  };

  return (
    <Comments
      addComment={addComment}
      onCommentChange={onCommentChange}
      state={state}
    />
  );
};

export default CommentsContainer;
