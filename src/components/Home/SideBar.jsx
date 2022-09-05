import React from "react";
import MenubarData from "../../MenubarData";

const SideBar = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="side-bar">
      {MenubarData.map((data, index) => {
        return (
          <div
            key={index}
            className="title-wrapper"
            style={{
              backgroundColor: activeMenu === data.name && "red",
              opacity: activeMenu === data.name ? "1" : "0.8",
            }}
            onClick={() => {
              setActiveMenu(data.name);
            }}
          >
            <div
              className="title-icon"
              style={{ color: activeMenu === data.name ? "white" : "red" }}
            >
              {data.icon}
            </div>
            <div className="title-name">{data.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
