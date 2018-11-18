import React from "react";

const Navigation = ({ onClickRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onClickRouteChange("signout")}
          className="f3 shadow-3 link dim grow black pa3 pointer br bb bw1 b--black-50 b--dark-pink br3"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onClickRouteChange("signin")}
          className="f3 shadow-3 link dim grow black pa3 pointer br bb bw1 b--black-50 b--dark-pink br3"
        >
          Sign In
        </p>
        <p
          onClick={() => onClickRouteChange("register")}
          className="f3 shadow-3 link dim grow black pa3 pointer br bb bw1 b--black-50 b--dark-pink br3"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
