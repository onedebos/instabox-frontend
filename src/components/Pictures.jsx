import React, { Component } from "react";
import axios from "axios";
import API_URL from "./helpers/apiHelper";
import "../styles/Pictures.css";
import PictureCard from "./PictureCard";
import { faCamera, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/pictures`)
      .then(response => {
        this.setState({ pictures: response.data });
        console.log(this.state.pictures);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { pictures } = this.state;

    const displayAllPictures = pictures.map(picture => (
      <PictureCard
        key={picture.id}
        uName={picture.created_by.toLowerCase()}
        displayPicture={picture.img_link}
        picture={picture.img_link}
        caption={picture.caption}
        dateCreated={picture.created_at}
        likes={picture.likes}
      />
    ));

    return (
      <div>
        <main className="PicturesWrapper">
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
