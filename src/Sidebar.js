import React from "react";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibrarySharpIcon} title="Library" />
      <SidebarRow Icon={HistorySharpIcon} title="History" />
      <SidebarRow Icon={OndemandVideoSharpIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterSharpIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltSharpIcon} title="Linked videos" />
      <SidebarRow Icon={ExpandMoreSharpIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
