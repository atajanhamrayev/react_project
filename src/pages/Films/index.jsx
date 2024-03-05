import React from "react";
import { connect } from "react-redux";
import FilmCard from "../../../src/components/Film/FilmCard";

let mapStateToProps = (state) => {
  return {
    films_data: state.filmsPage.films_data,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

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

const FilmsContainer = connect(mapStateToProps, mapDispatchToProps)(Films);

export default FilmsContainer;
