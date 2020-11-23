import React from "react";
import "../styles/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTweetEmbed,
  TwitterShareButton,
  TwitterTimelineEmbed,
} from "react-twitter-embed";

export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"463440424141459456"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Christopher Johnson"
          options={{ height: 400 }}
        />
        <TwitterShareButton url="https://www.facebook.com/" />
      </div>
    </div>
  );
}
