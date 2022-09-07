import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { mainMenu } from "../../Context";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchedVids, setSearchedVids] = useState("");
  const { setActiveMenu } = useContext(mainMenu);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    searchedVids && setActiveMenu(searchedVids);
    setSearchedVids("");
    navigate("/");
  };

  return (
    <form>
      <div className="search-bar">
        <input
          value={searchedVids}
          onChange={(e) => {
            setSearchedVids(e.target.value);
          }}
          placeholder="Search Here..."
        ></input>
        <div onClick={submit} className="search-icon">
          <button
            type="submit"
            style={{
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
              color: "white",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
