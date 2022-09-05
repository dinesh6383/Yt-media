import React, { useContext, useEffect } from "react";
import SideBar from "./SideBar";
import Thumbnails from "./Thumbnails";
import { mainMenu } from "../../Context";

const Home = () => {
  const { activeMenu, setActiveMenu } = useContext(mainMenu);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeMenu]);

  return (
    <div className="home-page">
      <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Thumbnails activeMenu={activeMenu} />
    </div>
  );
};

export default Home;
