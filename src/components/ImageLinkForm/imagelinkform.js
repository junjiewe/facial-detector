import React from "react";
import "./imagelinkform.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">{"I can detect faces of human. Try it out"}</p>
      <div className="center">
        <div className="form pa4 br3 shadow-5">
          <input
            className="f4 pa3 w-60 center br3 grow shadow-2"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 mv3 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
