import React from "react";
import FilmCard from "../../../src/components/Film/FilmCard";

const Films = (props) => {
  return (
    <div className="content text-left w-[620px] pl-[5px] float-left">
      {props.films_data.map((el) => {
        return (
          <FilmCard
            key={el.id}
            id={el.id}
            photo={el.photo}
            name={el.name}
            description={el.description}
          />
        );
      })}
    </div>
  );
};
export default Films;
