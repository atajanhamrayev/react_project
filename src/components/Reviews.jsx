import React from "react";

const Reviews = (props) => {
  return (
    <div className="reviews mb-[4%] text-[0.9em]">
      <div className="review_name bg-[#7268AD] text-white p-[1%] rounded-t-[5px]">
        {props.name}
      </div>
      <div className="review_text px-[2%] pl-[2%]">{props.comment}</div>
    </div>
  );
};

export default Reviews;
