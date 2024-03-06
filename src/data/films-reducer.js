const UPDATE_NEW_COMMENT = "UPDATE-NEW-COMMENT";
const ADD_COMMENT = "ADD-COMMENT";

let initialState = {
  films_data: [
    {
      id: 1,
      photo: "inter.png",
      name: "Интерсталлер",
      director: "Кристофер Нолан",
      year_produce: 2014,
      rating: 9,
      description:
        "Когда засуха приводит человечество к продовольственному кризису,коллектив исследователей и учёных отправляется сквозь червоточину(которая предположительно соединяет области пространства-времени черезбольшое расстояние) в путешествие...",
    },
    {
      id: 2,
      photo: "max.png",
      name: "Безумный Макс",
      director: "Джеки Чан",
      year_produce: 2015,
      rating: 6.8,
      description:
        "Когда засуха приводит человечество к продовольственному кризису,коллектив исследователей и учёных отправляется сквозь червоточину(которая предположительно соединяет области пространства-времени черезбольшое расстояние) в путешествие...",
    },
    {
      id: 3,
      photo: "matrix.png",
      name: "Матрица",
      director: "Силвестер Сталоне",
      year_produce: 2016,
      rating: 7.1,
      description:
        "Когда засуха приводит человечество к продовольственному кризису,коллектив исследователей и учёных отправляется сквозь червоточину(которая предположительно соединяет области пространства-времени черезбольшое расстояние) в путешествие...",
    },
    {
      id: 4,
      photo: "cloud.png",
      name: "Облачный Атлас",
      director: "Ван Дам",
      year_produce: 2017,
      rating: 85.4,
      description:
        "Когда засуха приводит человечество к продовольственному кризису,коллектив исследователей и учёных отправляется сквозь червоточину(которая предположительно соединяет области пространства-времени черезбольшое расстояние) в путешествие...",
    },
  ],
  comments: [
    {
      id: 1,
      name: "Сергей",
      text: "Отличный фильм, 3 часа пролетели не заметно.",
    },
    {
      id: 2,
      name: "Дмитрий",
      text: "После фильма Начало, я с не терпением ждал еще работ от Кристофера Нолана. Интерстеллар меня впечатлил.",
    },
    {
      id: 3,
      name: "Atajan",
      text: "После фильма Начало, я с не терпением ждал еще работ от Кристофера Нолана. Интерстеллар меня впечатлил.",
    },
  ],
  newComment: {
    name: "",
    text: "",
  },
  getFilm() {
    const pathname = window.location.pathname;
    function reverseString(str) {
      return str.split("").reverse().join("");
    }

    let str = pathname;
    let reversedStr = reverseString(str);
    let num = parseInt(reversedStr);
    for (const item of this.films_data) {
      if (item.id === num) {
        return item;
      }
    }
  },
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_COMMENT: {
      let stateCopy = { ...state };
      stateCopy.films_data = [...state.films_data];
      stateCopy.comments = [...state.comments];
      stateCopy.newComment = { ...state.newComment };
      stateCopy.newComment.name = action.comment.name;
      stateCopy.newComment.text = action.comment.text;
      return stateCopy;
    }
    case ADD_COMMENT:
      let newComment = {
        id: state.comments.length + 1,
        name: state.newComment.name,
        text: state.newComment.text,
      };
      let stateCopy = { ...state };
      stateCopy.films_data = [...state.films_data];
      stateCopy.comments = [...state.comments];
      stateCopy.newComment = { ...state.newComment };
      stateCopy.comments.push(newComment);

      stateCopy.newComment = { name: "", text: "" };
      return stateCopy;
    default:
      return state;
  }
};

export const addCommentActionCreator = () => ({ type: ADD_COMMENT });
export const updateNewCommmentActionCreator = (comment) => ({
  type: UPDATE_NEW_COMMENT,
  comment: comment,
});

export default filmsReducer;
