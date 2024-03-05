import React from "react";
import { Link } from "react-router-dom";

const FilmCard = (props) => {
  return (
    <div className="info_film mb-[5%] bg-[#f9f9f9] p-[5%]">
      <img
        src={"./images/" + props.photo}
        alt="inter"
        className="float-left mr-[2%] rounded-[5px] border-solid border-[5px] border-[#dad7d5] w-[25%]"
      />
      <h3 className="text-[20px] text-bold underline">{props.name}</h3>
      <p className="mb-[5%]">
        {props.description}
        <span className="button cursor-pointer bg-[#7268ad] p-[2%] text-white rounded-[5px] float-right clear-both text-[0.8em]">
          <Link to={`/films/detail/${props.id}`} className="text-white">
            Смотреть
          </Link>
        </span>
      </p>
    </div>
  );
};

export default FilmCard;
