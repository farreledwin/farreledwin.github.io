import React from "react";
import "./our-team.styles.scss";
import PakDiaz from "../../assets/images/DIAZ001.jpg";
import Ardiant from "../../assets/images/ardiant.jpg";
import Farrel from "../../assets/images/farrel.jpg";
import Vincent from "../../assets/images/vincent.jpg";

const HrStyling = {
  backgroundColor: "white",
  width: "13em",
};

const positionName = {
  position: "relative",
  left: "-3em",
  fontFamily: "PoppinsThin",
  marginBottom: "0",
};

const jobPosition = {
  position: "relative",
  left: "1em",
  fontFamily: "PoppinsItalic",
};

const studentPosition = {
  position: "relative",
  left: "-0.5em",
  fontFamily: "PoppinsItalic",
};

const farrelName = {
  position: "relative",
  left: "-1em",
  fontFamily: "PoppinsThin",
  marginBottom: "0px",
};

const vincentName = {
  position: "relative",
  left: "-4.7em",
  fontFamily: "PoppinsThin",
  marginBottom: "0px",
};

const OurTeam = () => (
  <div className="our-team text-white modify-padding">
    <div className="text-ourteam text-center">
      <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        Our Team
      </h1>
      <div className="image-leader pt-5">
        <div
          className="col-sm-12 pb-5"
          data-aos="zoom-in-down"
          data-aos-easing="ease-in-out-quad"
          data-aos-duration="1000"
        >
          <img
            src={PakDiaz}
            className="img-thumbnail"
            style={{ width: "200px" }}
          />
          <hr style={HrStyling}></hr>
          <p style={positionName}>Diaz D. Santika</p>
          <p style={jobPosition}>Senior Lecture In Binus University</p>
        </div>
        <div className="row">
          <div
            className="col-sm-4"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <img
              src={Ardiant}
              className="img-thumbnail"
              style={{ width: "200px" }}
            />
            <hr style={HrStyling}></hr>
            <p style={positionName}>Ardiant Utomo</p>
            <p style={studentPosition}>Student in Binus University</p>
          </div>
          <div
            className="col-sm-4"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <img
              src={Farrel}
              className="img-thumbnail"
              style={{ width: "200px" }}
            />
            <hr style={HrStyling}></hr>
            <p style={farrelName}>Edwin Farrel Juniawan</p>
            <p style={studentPosition}>Student in Binus University</p>
          </div>
          <div
            className="col-sm-4"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <img
              src={Vincent}
              className="img-thumbnail"
              style={{ width: "200px" }}
            />
            <hr style={HrStyling}></hr>
            <p style={vincentName}>Vincent</p>
            <p style={studentPosition}>Student in Binus University</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurTeam;
