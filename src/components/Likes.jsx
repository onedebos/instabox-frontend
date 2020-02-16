import React, { Component } from "react";
import TimeAgo from "react-timeago";
import "../styles/Likes.css";

export default class Likes extends Component {
  render() {
    const { dateCreated, likes } = this.props;
    return (
      <div>
        <div className="timeSincePost">
          <div>
            <TimeAgo date={dateCreated} />
          </div>
          <div>
            <span className="Likes">{likes} likes</span>
          </div>
        </div>
      </div>
    );
  }
}
