import React from "react";
import "./FaceDetection.css";

const FaceDetection = ({ imgUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imgUrl} width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            left: box.leftCol,
            bottom: box.bottomRow
          }}
        />
      </div>
    </div>
  );
};

export default FaceDetection;
