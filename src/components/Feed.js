import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import TweetBox from "./TweetBox";
import { Post } from "./Post";
import { database } from "../configs/firebase";
import FlipMove from "react-flip-move";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    database
      .collection("posts")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="feed">
      {/* Header  */}
      <div className="feed__header">
        <h2>Header</h2>
      </div>
      {/* Tweet Box  */}
      <TweetBox />
      {/* Posts  */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            key={post.text}
          />
        ))}
      </FlipMove>
    </div>
  );
}
