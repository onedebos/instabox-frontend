import React, { Component } from "react";
import API_URL from "./helpers/apiHelper";
import axios from "axios";
import "../styles/Comment.css";
import uuid from "uuid";
export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      name: "",
      comment: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const { pid } = this.props;
    axios.get(`${API_URL}/pictures/${pid}/comments`).then(response => {
      this.setState({
        comments: response.data
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, comment } = this.state;
    const { pid } = this.props;
    const body = {
      name,
      comment
    };
    axios
      .post(`${API_URL}/pictures/${pid}/comments`, body)
      .then(response => console.log(response.data));

    this.setState({ name: "", comment: "" });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { comments } = this.state;
    const displayAllComments = comments.map(comment => (
      <div className="commentWrapper" key={uuid()}>
        <p className="ShowComment">
          <strong className="commentName">{comment.name}</strong>
          <span className="comment">{comment.comment}</span>
        </p>
      </div>
    ));

    return (
      <div>
        <div className="view">View all comments</div>
        {displayAllComments}
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Your name: "
          ></input>
          <input
            name="comment"
            id="comment"
            type="text"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="Your comment: "
          ></input>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}
