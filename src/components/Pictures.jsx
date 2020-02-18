import React, { Component } from "react";
import axios from "axios";
import API_URL from "./helpers/apiHelper";
import "../styles/Pictures.css";
import PictureCard from "./PictureCard";
import Likes from "./Likes";
// import Comments from "./Comments";
import uuid from "uuid";
import { faCamera, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      comments: {},
      likes: 0,
      color: "black",
      liked: false,
      notification: ""
    };
    this.increaseLikes = this.increaseLikes.bind(this);
  }

  componentDidMount() {
    this.getUpdatedPictures();
  }

  getUpdatedPictures() {
    axios
      .get(`${API_URL}/pictures`)
      .then(response => {
        this.setState({ pictures: response.data });
      })
      .catch(error => console.log(error));
  }
  increaseLikes(e) {
    const pid = e.target.getAttribute("pid");
    this.setState({ color: "red" });
    document.querySelector(`.HeartIcon-${pid}`).style.color = "green";

    this.getPictureClicked(pid);
  }

  getPictureClicked(pid) {
    axios
      .get(`${API_URL}/pictures/${pid}`)
      .then(response => {
        this.setState({ likes: response.data.likes });
        console.log("check if liked", response.data.liked);
        if (response.data.liked === false) {
          this.increase(pid);
        } else {
          console.log("else", response.data.liked);
          this.setState({ notification: "You cannot like a picture twice." });
          setTimeout(() => this.setState({ notification: "" }), 4000);
        }
      })
      .catch(error => console.log(error));
  }

  increase(pid) {
    const { likes } = this.state;
    const body = {
      likes: likes + 1
    };

    axios.put(`${API_URL}/pictures/${pid}`, body).then(() => {
      this.getUpdatedPictures();
    });
  }

  loadComments(pid) {
    axios
      .get(`${API_URL}/${pid}/comments`)
      .then(response => console.log(response.data));
  }
  render() {
    const { pictures, notification } = this.state;

    const displayAllPictures = pictures.map(picture => (
      <div key={uuid()}>
        <PictureCard
          key={picture.id}
          uName={picture.created_by.toLowerCase()}
          displayPicture={picture.img_link}
          picture={picture.img_link}
          caption={picture.caption}
          increaseLikes={this.increaseLikes}
          pid={picture.id}
        />
        <Likes dateCreated={picture.created_at} likes={picture.likes} />
      </div>
    ));

    return (
      <div>
        <main className="PicturesWrapper">
          <div className="displayNot">
            {notification.length === 0 ? (
              ""
            ) : (
              <div className="notification">{notification}</div>
            )}
          </div>
          <div className="MenuBar">
            <div className="LeftMenu">
              <div className="CameraIcon">
                <FontAwesomeIcon
                  className="CamIcon"
                  icon={faCamera}
                  size="2x"
                  color="grey"
                />
              </div>
              <div className="LogoIconDiv">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1000px-Instagram_logo.svg.png"
                  alt="igLogo"
                  className="LogoIcon"
                />
              </div>
            </div>
            <div className="SendIcon">
              <FontAwesomeIcon size="2x" icon={faPaperPlane} color="grey" />
            </div>
          </div>

          {displayAllPictures}
        </main>
      </div>
    );
  }
}
