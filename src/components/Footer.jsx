import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[100px] pt-[28px] px-0 pb-[5px] text-center bg-[#483d8b] text-[#a8aa94] mx-0 m-w-[900px] float-end">
      <p className="pt-0 px-0 pb-[10px]">
        <span className="text-[#a8aa94] hover:text-white cursor-pointer">
          Главная
        </span>{" "}
        |
        <span className="text-[#a8aa94] hover:text-white cursor-pointer">
          Фильмы
        </span>{" "}
        |
        <span className="text-[#a8aa94] hover:text-white cursor-pointer">
          Сериалы
        </span>{" "}
        |
        <span className="text-[#a8aa94] hover:text-white cursor-pointer">
          Рейтинг фильмов
        </span>{" "}
        |
        <span className="text-[#a8aa94] hover:text-white cursor-pointer">
          Контакты
        </span>
      </p>

      <p>atajan-react</p>
    </footer>
  );
};

export default Footer;
