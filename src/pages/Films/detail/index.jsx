import React from "react";
import CommentsContainer from "../../../components/Comments/CommentsContainer";

const Film = (props) => {
  let state = props.store.getState().filmsPage;
  let film = state.getFilm();

  return (
    <>
      <div
        className="content text-left w-[620px] pl-[5px] float-left"
        key={film.id}
      >
        <h1>{film.name}</h1>
        <video
          src="#"
          width="560px"
          height="315px"
          className="border-[1px] border-solid border-black"
        ></video>

        <div className="info_film_page mt-[2%] mb-[4%]">
          <span className="label text-[1.2em]">рейтинг: </span>
          <span className="value text-[1em] text-[#49945A] mr-[3%]">
            {film.rating} / 10
          </span>
          <span className="label text-[1.2em]">год: </span>
          <span className="value text-[1em] text-[#49945A] mr-[3%]">
            {film.year_produce}
          </span>
          <span className="label text-[1.2em]">режиссер: </span>
          <span className="value text-[1em] text-[#49945A] mr-[3%]">
            {film.director}
          </span>
        </div>

        <hr className="border-solid border-1px border-[#f3f3f3]" />

        <h2>Описание {film.name}</h2>
        <div className="descriptions_film mb-[15%]">
          <img
            src={`../../images/${film.photo}`}
            className="float-left mr-[2%] rounded-[5px] border-solid border-[5px] border-[#dad7d5]"
            alt=""
          />
          {film.description}
        </div>

        <hr className="border-solid border-1px border-[#f3f3f3]" />

        <CommentsContainer state={state} dispatch={props.dispatch} />
      </div>
    </>
  );
};

export default Film;
