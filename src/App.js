import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SidebarContainer from "./components/SidebarContainer";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Films from "./pages/Films";
import MessageContainer from "./pages/Message/MessageContainer";
import Film from "./pages/Films/detail";
import "./App.css";

const App = (props) => {
  let state = props.store.getState();
  return (
    <div className="main mx-auto">
      <Header />
      <div className="site_content mx-auto w-[880px] hidden mt-[20px] mb-0 bg-white">
        <SidebarContainer />
        <div className="content  w-[620px] float-left text-left">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/films"
              element={<Films films_data={state.filmsPage.films_data} />}
            />
            <Route
              path="/films/detail/:id"
              element={<Film dispatch={props.dispatch} store={props.store} />}
            />
            <Route
              exact
              path="/messages"
              element={
                <MessageContainer
                  store={props.store}
                  dispatch={props.dispatch}
                />
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
