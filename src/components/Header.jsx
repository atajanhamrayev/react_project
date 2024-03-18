import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header  bg-[#483d8b] text-[0.8em] mx-auto min-w-[900px] mb-[20px]">
      <div className="logo mx-auto w-[880px] pb-[40px]">
        <div className="logo_text">
          <h1 className="font-normal tracking-wider text-7xl font-['century-gothic', Arial, sans-serif] mt-0 mb-0 mr-0 ml-6 pt-[22px] pb-0 px-0 text-white tracking-widest no-underline">
            КиноМонстр
          </h1>
          <h2 className="font-normal tracking-wider text-7xl font-['century-gothic', Arial, sans-serif] mt-0 mb-0 mr-0 ml-6 text-[0.9em] pt-[4px] px-0 pb-0 text-[#999]">
            Кино - наша страсть!
          </h2>
        </div>
      </div>

      <div className="menubar mx-auto w-[900px] h-[46px]">
        <ul className="menu float-left flex mx-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-yellow no-underline hover:no-underline"
                  : "text-white no-underline hover:no-underline"
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/films"
              className={({ isActive }) =>
                isActive
                  ? " text-yellow no-underline hover:no-underline"
                  : "text-white no-underline hover:no-underline"
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive
                  ? " text-yellow no-underline hover:no-underline"
                  : "text-white no-underline hover:no-underline"
              }
            >
              Сообщения
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? " text-yellow no-underline hover:no-underline"
                  : "text-white no-underline hover:no-underline"
              }
            >
              Find Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/:id"
              className={({ isActive }) =>
                isActive
                  ? " text-yellow no-underline hover:no-underline"
                  : "text-white no-underline hover:no-underline"
              }
            >
              Profile
            </NavLink>
          </li>
          <li>Контакты</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
