import React, { Component } from "react";
import API_URL from "./helpers/apiHelper";
import axios from "axios";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    const { pid } = this.props;
    axios.get(`${API_URL}/pictures/${pid}/comments`).then(response => {
      this.setState({
        comments: response.data
      });
      //   console.log(response.data);
      console.log(this.state.comments);
    });
  }
  render() {
    return <div></div>;
  }
}
