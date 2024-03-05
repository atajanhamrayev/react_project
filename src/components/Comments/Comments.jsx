import React from "react";
import Reviews from "../Reviews";

const Comments = (props) => {
  let newCommentAuthor = React.createRef();
  let newCommentText = React.createRef();

  let addComment = () => {
    props.addComment();
  };

  let onCommentChange = () => {
    props.onCommentChange(
      newCommentAuthor.current.value,
      newCommentText.current.value
    );
  };

  return (
    <>
      <h2>Отзывы об Kino</h2>

      {props.state.comments.map((comment) => {
        return (
          <Reviews id={comment.id} name={comment.name} comment={comment.text} />
        );
      })}

      <div className="send_form mb-[4%]">
        <input
          type="text"
          name="review_name"
          placeholder="ваше имя"
          className="border-solid border-[1px] border-[#C3C3C3] mb-[2%] w-[98%]"
          ref={newCommentAuthor}
          value={props.state.newComment.name}
          onChange={onCommentChange}
        />
        <textarea
          className="review_text border-solid border-[1px] border-[#C3C3C3] mb-[2%] w-[98%] h-[200px] p-[3%]"
          name="textarea"
          ref={newCommentText}
          value={props.state.newComment.text}
          onChange={onCommentChange}
        />
        <input
          className="btn bg-[#7268ad] p-[3%] text-white rounded-[5px] cursor-pointer"
          type="button"
          value="отправить"
          onClick={addComment}
        />
      </div>
    </>
  );
};

export default Comments;
