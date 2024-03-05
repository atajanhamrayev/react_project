import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SidebarContainer from "./components/SidebarContainer";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FilmsContainer from "./pages/Films";
import MessageContainer from "./pages/Message/MessageContainer";
import Film from "./pages/Films/detail";
import "./App.css";

const App = () => {
  return (
    <div className="main mx-auto">
      <Header />
      <div className="site_content mx-auto w-[880px] hidden mt-[20px] mb-0 bg-white">
        <SidebarContainer />
        <div className="content  w-[620px] float-left text-left">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/films" element={<FilmsContainer />} />
            <Route path="/films/detail/:id" element={<Film />} />
            <Route exact path="/messages" element={<MessageContainer />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
