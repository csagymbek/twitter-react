import { Avatar } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import React from "react";
import "../styles/Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

export default function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1315307357077794817/ErPAUz9m_400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Christopher Johnson
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Not lost, just locationally challenged!</p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1587467238523-2ef1534d7ebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
