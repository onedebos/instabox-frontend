import React, { Component } from "react";
import API_URL from "./helpers/apiHelper";
import uuid from "uuid";
import axios from "axios";
import "../styles/Comments.css";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      addComment:'',
    };
    this.addComment = this.addComment.bind(this);
  }
  componentDidMount() {
    this.upDateComments();
  }

  upDateComments() {
    const { pid } = this.props;

    axios.get(`${API_URL}/pictures/${pid}/comments`).then(response => {
      this.setState({ comments: response.data });
    });
  }

  addComment(e) {
    const pid = e.target.getAttribute("pid");
    this.setState({comment: commenting})
    this.

  }

  render() {
    const { comments } = this.state;
    const displayAllComments = comments.map(comment => (
      <div key={uuid()} className="Comment">
        <p className="CommentName">
          {comment.name}
          <span className="CommentComment">{comment.comment}</span>
        </p>
      </div>
    ));
    return (
      <div className="CommentsBox">
        <p className="CommentsView">View all {comments.length} comments</p>
        {displayAllComments}
        <form className="AddComment" onSubmit={this.addComment}>
          <input
            type="text"
            name="commenting"
            placeholder="Add a comment"
            className="CommentBox"
          />
        </form>
      </div>
    );
  }
}
