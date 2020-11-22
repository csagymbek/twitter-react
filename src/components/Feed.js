import React from "react";
import "../styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="feed">
      {/* Header  */}
      <div className="feed__header">
        <h2>Header</h2>
      </div>
      {/* Tweet Box  */}
      <TweetBox />
      {/* Posts  */}
      <Post />
      <Post />
    </div>
  );
}
