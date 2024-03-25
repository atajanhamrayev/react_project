import React from "react";
import { Routes, Route } from "react-router-dom";
import SidebarContainer from "./components/SidebarContainer";
import Home from "./pages/Home";
import FilmsContainer from "./pages/Films";
import Film from "./pages/Films/detail";
import "./App.css";
import Footer from "./components/Footer";
import MessageContainer from "./pages/Message/MessageContainer";
import UsersContainer from "./pages/Users/UsersContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <div className="main mx-auto">
      <HeaderContainer />
      <div className="site_content mx-auto w-[880px] hidden mt-[20px] mb-0 bg-white">
        <SidebarContainer />
        <div className="content  w-[620px] float-left text-left p-[20px]">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/films" element={<FilmsContainer />} />
            <Route path="/films/detail/:id" element={<Film />} />
            <Route exact path="/messages" element={<MessageContainer />} />
            <Route exact path="/users" element={<UsersContainer />} />
            <Route path="/profile/:id?" element={<ProfileContainer />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
