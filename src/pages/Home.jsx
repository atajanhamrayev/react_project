import React from "react";

const Home = () => {
  return (
    <div className="">
      <h1>Новые фильмы</h1>

      <div className="films_block mb-[5%] flex">
        <a>
          <img
            className="rounded-[5px] border-solid border-[5px] border-[#dad7d5] w-full"
            src="./images/matrix.png"
            alt="xfiles"
          />
        </a>
        <a>
          <img
            className="rounded-[5px] border-solid border-[5px] border-[#dad7d5] w-full"
            src="./images/max.png"
            alt="xfiles"
          />
        </a>
        <a>
          <img
            className="rounded-[5px] border-solid border-[5px] border-[#dad7d5] w-full"
            src="./images/inter.png"
            alt="xfiles"
          />
        </a>
        <a>
          <img
            className="rounded-[5px] border-solid border-[5px] border-[#dad7d5] w-full"
            src="./images/cloud.png"
            alt="xfiles"
          />
        </a>
      </div>

      <h1>Новые сериалы</h1>

      <div className="films_block mb-[5%] flex">
        <a>
          <img
            className="rounded-[5px] border-solid border-[5px] border-[#dad7d5] w-full"
            src="./images/dead.png"
            alt="xfiles"
          />
        </a>
        <a>
          <img
            className="rounded-[5px] border-solid border-[5px] border-[#dad7d5] w-full"
            src="./images/silicon.png"
            alt="silicon"
          />
        </a>
        <a>
          <img
            className="rounded-[5px] border-solid border-[5px] border-[#dad7d5] w-full"
            src="./images/breakingbad.png"
            alt="breakingbad"
          />
        </a>
        <a>
          <img
            className="rounded-[5px] border-solid border-[5px] border-[#dad7d5] w-full"
            src="./images/xfiles.png"
            alt="xfiles"
          />
        </a>
      </div>

      <div className="posts">
        <hr />
        <h2>
          <a>Как снимали Интерстеллар</a>
        </h2>
        <div className="posts_content">
          <p>
            45 лет исполнилось Кристоферу Нолану — одному из самых успешных
            режиссеров нашего времени, чьи работы одинаково любимы как
            взыскательными критиками, так и простыми зрителями. Фильмом
            изначально занималась студия Paramount. Когда Кристофер Нолан занял
            место режиссера, студия Warner Bros., которая выпускала его
            последние фильмы, добилась участия в проекте.
          </p>
        </div>

        <p>
          <a>читать</a>
        </p>
        <hr />
        <h2>
          <a>Актер Том Хенкс поделился впечатлением о фестивале</a>
        </h2>
        <div className="posts_content">
          <p>
            16 февраля в Лондоне состоялась 67-я церемония вручения наград
            Британской киноакадемии. Леонардо ДиКаприо, Брэд Питт, Анджелина
            Джоли, Кейт Бланшетт, Хелен Миррен, Эми Адамс, Кристиан Бэйл,
            Альфонсо Куарон и другие гости и победители премии — в нашем
            репортаже.
          </p>
        </div>
        <p>
          <a>читать</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
