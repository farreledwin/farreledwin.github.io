import React from "react";
import "./upload-photos.styles.scss";
import UploadImageJPG from "../../assets/images/download.png";
import { faUserMd, faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const marginAuto = {
  margin: "auto",
};

const positionCamera = {
  position: "relative",
  left: "-0.4em",
};

const UploadPhotos = () => (
  <div
    className="container modify-padding"
    data-aos="flip-left"
    data-aos-easing="linear"
    data-aos-duration="1000"
  >
    <div className="text-center text-white">
      <p>Upload Your Mammography Photos Here!</p>
      <div className="icon-upload d-flex">
        <FontAwesomeIcon icon={faUserMd} />
        <label
          className="btn btn-link purple-color-change text-white width-change-button"
          style={marginAuto}
        >
          <FontAwesomeIcon icon={faCamera} style={positionCamera} />
          <input type="file" class="display-gone" />
          Choose Photo
        </label>
      </div>
    </div>
  </div>
);

export default UploadPhotos;
