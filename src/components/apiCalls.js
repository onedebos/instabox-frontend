import React, { Component } from "react";
import axios from "axios";
import API_URL from "./helpers/apiHelper";

export default class apiCalls extends React.Component {
  getUpdatedPictures = whatToUpdate => {
    axios
      .get(`${API_URL}/pictures`)
      .then(response => {
        this.setState({ whatToUpdate: response.data });
      })
      .catch(error => console.log(error));
  };

  increaseLikes = e => {
    e.preventDefault();

    const pid = e.target.getAttribute("pid");
    const heart = document.querySelector(`.HeartIcon-${pid}`);
    heart.setAttribute("color", "red");

    this.getPictureClicked(pid);
  };

  getPictureClicked(pid, whatToUpdate) {
    axios
      .get(`${API_URL}/pictures/${pid}`)
      .then(response => {
        this.setState({ whatToUpdate: response.data.likes });
        this.increase(pid);
      })
      .catch(error => console.log(error));
  }

  loadComments(pid) {
    axios
      .get(`${API_URL}/${pid}/comments`)
      .then(response => console.log(response.data));
  }
}
