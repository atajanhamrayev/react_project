import React from "react";
import {
  updateNewCommmentActionCreator,
  addCommentActionCreator,
} from "../../data/films-reducer";
import Comments from "./Comments";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.filmsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addComment: () => {
      dispatch(addCommentActionCreator());
    },
    onCommentChange: (author, text) => {
      let updateComment = {
        name: author,
        text: text,
      };

      dispatch(updateNewCommmentActionCreator(updateComment));
    },
  };
};

const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

export default CommentsContainer;
