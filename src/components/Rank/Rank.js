import React from "react";

const Rank = ({ name, score }) => {
  return (
    <div>
      <div className="Black f3">{`${name}, your current score is...`}</div>
      <div className="Black f1">{score}</div>
    </div>
  );
};

export default Rank;
