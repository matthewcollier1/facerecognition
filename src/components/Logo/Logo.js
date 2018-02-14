import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 40 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa4">
          <img style={{ paddingTop: "10px" }} alt="Logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
