import React from "react";

const SidebarContainer = () => {
  return (
    <div className="sidebar_container float-right w-[224px]">
      <div className="sidebar float-right w-[222px] p-[5%] mx-0 mt-0 mb-[16px] border-solid border-[1px] border-[#f2f2f2] rounded-[5px] bg-[#f9f9f9]">
        <h2 className="text-[#136cb2]">Поиск</h2>
        <form action="#">
          <input type="search" name="search_field" placeholder="ваш запрос" />
          <input
            type="submit"
            value="найти"
            className="btn p-[8px] bg-white cursor-pointer"
          />
        </form>
      </div>

      <div className="sidebar float-right w-[222px] p-[5%] mx-0 mt-0 mb-[16px] border-solid border-[1px] border-[#f2f2f2] rounded-[5px] bg-[#f9f9f9]">
        <h2 className="text-[#136cb2]">Вход</h2>
        <form method="post" action="#" id="login">
          <input type="text" name="login_field" placeholder="логин" />
          <input type="password" name="password_field" placeholder="пароль" />
          <input type="submit" className="btn" value="вход" />
          <div className="lables_passreg_text text-[0.7em] mt-[3%] ml-[2%]">
            <span href="#">забыли пароль?</span> |{" "}
            <span href="#">регистрация</span>
          </div>
        </form>
      </div>

      <div className="sidebar float-right w-[222px] p-[5%] mx-0 mt-0 mb-[16px] border-solid border-[1px] border-[#f2f2f2] rounded-[5px] bg-[#f9f9f9]">
        <h2 className="text-[#136cb2]">Новости</h2>
        <span>31.02.2018</span>
        <p>Мы запустили расширенный поиск</p>
        <div>читать</div>
      </div>

      <div className="sidebar float-right w-[222px] p-[5%] mx-0 mt-0 mb-[16px] border-solid border-[1px] border-[#f2f2f2] rounded-[5px] bg-[#f9f9f9]">
        <h2 className="text-[#136cb2]">Рейтинг фильмов</h2>
        <ul className="m-0">
          <li className="list-none m-0">
            Интерстеллар<span className="rating_sidebar float-right">8.1</span>
          </li>
          <li className="list-none m-0">
            Матрица<span className="rating_sidebar float-right">8.1</span>
          </li>
          <li className="list-none m-0">
            Безумный макс<span className="rating_sidebar float-right">8.1</span>
          </li>
          <li className="list-none m-0">
            Облачный атлас
            <span className="rating_sidebar float-right">8.1</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarContainer;
