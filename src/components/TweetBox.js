import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "../styles/TweetBox.css";

export default function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1315307357077794817/ErPAUz9m_400x400.jpg" />
          <input type="text" placeholder="What’s happening?" />
        </div>
        <input type="text" placeholder="Enter image URL" className="tweetBox__inputImage" />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}
