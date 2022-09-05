import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { mainMenu } from "../../Context";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchedVids, setSearchedVids] = useState("");
  const { setActiveMenu } = useContext(mainMenu);
  const navigate = useNavigate();

  const submit = () => {
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
          <AiOutlineSearch />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
