import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
          <Route path="/profile/*" element={<Profile store={props.store} />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/*" element={<Navbar state={props.state.sideBar} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
