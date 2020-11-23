import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/TweetBox.css";
import { database } from "../configs/firebase";

export default function TweetBox() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    database.collection("posts").add({
      displayName: "Christopher Johnson",
      username: "@cjohnson",
      verified: true,
      text: message,
      image,
      avatar:
        "https://pbs.twimg.com/profile_images/1315307357077794817/ErPAUz9m_400x400.jpg",
    });
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1315307357077794817/ErPAUz9m_400x400.jpg" />
          <input
            type="text"
            placeholder="What’s happening?"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Enter image URL"
          className="tweetBox__inputImage"
          onChange={(e) => setImage(e.target.value)}
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}
