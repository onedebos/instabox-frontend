import React from "react";
import "../styles/PictureCard.css";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeAgo from "react-timeago";

export default function PictureCard({
  displayPicture,
  uName,
  picture,
  caption,
  dateCreated,
  likes
}) {
  return (
    <div className="PictureCardWrapper">
      <div className="UserBar">
        <div className="UserAv">
          <img src={displayPicture} alt="UserAvatar" className="UserAvatar" />
        </div>
        <div className="UserName">{uName}</div>
        <div className="Dots">
          <FontAwesomeIcon icon={faEllipsisV} color="grey" />
        </div>
      </div>
      <div className="MainPictureDiv">
        <img src={picture} alt="mainPicture" className="MainPicture" />
      </div>
      <div className="PictureIcons">
        <div>
          <FontAwesomeIcon
            icon={faHeart}
            size="2x"
            color="grey"
            className="PictureIconsIcon"
          />
          <FontAwesomeIcon
            icon={faComment}
            size="2x"
            color="grey"
            className="PictureIconsIcon"
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            size="2x"
            color="grey"
            className="PictureIconsIcon"
          />
        </div>
        <div className="BookMarkIcon">
          <FontAwesomeIcon icon={faBookmark} size="2x" color="grey" />
        </div>
      </div>
      <div className="caption">
        <p className="CaptionP">
          <strong>{uName}</strong>
          <span className="captionSp">{caption}</span>
        </p>
        <div className="timeSincePost">
          <div>
            <TimeAgo date={dateCreated} />
          </div>
          <div>
            <span className="Likes">{likes} likes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
