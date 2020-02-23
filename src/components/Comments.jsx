import React, { Component } from "react";
import API_URL from "./helpers/apiHelper";
import axios from "axios";
import "../styles/Comment.css";
import uuid from "uuid";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      name: "",
      comment: "",
      notification: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    const { pid } = this.props;
    axios.get(`${API_URL}/pictures/${pid}/comments`).then(response => {
      this.setState({
        comments: response.data
      });
    });
  }

  handleDelete(e) {
    const { pid } = this.props;
    const cid = e.currentTarget.getAttribute("cid");

    axios.delete(`${API_URL}/pictures/${pid}/comments/${cid}`).then(response =>
      this.setState({
        // comments: response.data,
        notification: "Comment deleted"
      })
    );

    setTimeout(() => {
      this.setState({
        notification: ""
      });
    }, 3000);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, comment } = this.state;
    const { pid } = this.props;

    const body = {
      name,
      comment
    };
    axios.post(`${API_URL}/pictures/${pid}/comments`, body).then(response => {
      this.setState({ comments: response.data });
    });

    this.setState({ name: "", comment: "" });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { comments, notification } = this.state;
    const displayAllComments = comments.map(comment => (
      <div className="commentWrapper" key={uuid()}>
        <div className="ShowComment">
          <div className="comments">
            <strong className="commentName">{comment.name}</strong>
            <span className="comment">{comment.comment}</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon
              icon={faTrashAlt}
              onClick={this.handleDelete}
              cid={comment.id}
            />
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <div className="commentNot">
          {notification.length === 0 ? (
            ""
          ) : (
            <div className="commentDel">
              <p>{notification}</p>
            </div>
          )}
        </div>
        <div className="view">View all comments</div>
        {displayAllComments}
        <form onSubmit={this.handleSubmit} className="commentForm">
          <input
            name="name"
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Your name: "
            className="commentInput"
          ></input>
          <input
            name="comment"
            id="comment"
            type="text"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="Your comment: "
            className="commentInput"
          ></input>
          <div>
            {" "}
            <small>hit enter to add comment</small>
          </div>

          <button type="submit" className="submitComment"></button>
        </form>
      </div>
    );
  }
}
