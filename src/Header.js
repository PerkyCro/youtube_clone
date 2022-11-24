import React, { useState } from "react";
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header_center">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header_inputButton" />
        </Link>
      </div>
      <div className="header_right">
        <VideoCallSharpIcon className="header_right" />
        <AppsSharpIcon />
        <NotificationsSharpIcon />
        <Avatar src="https://assets.reedpopcdn.com/god-of-war-walkthrough-guide-5004-1642178551828.jpg/BROK/thumbnail/1200x1200/quality/100/god-of-war-walkthrough-guide-5004-1642178551828.jpg" />
      </div>
    </div>
  );
}

export default Header;
