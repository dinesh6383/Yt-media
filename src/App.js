import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import VideoPage from "./components/VideoPage/VideoPage";
import ChannelPage from "./components/ChannelPage/ChannelPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} exact element={<Home />}></Route>
        <Route path={"/channel/:id"} element={<ChannelPage />}></Route>
        <Route path={"/video/:id"} element={<VideoPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
