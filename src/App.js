import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

import Navigation from "./components/navigation/navigation";
import Logo from "./components/Logo/logo";
import ImageLinkForm from "./components/ImageLinkForm/imagelinkform";
import Rank from "./components/Rank/Rank";
import FaceDetection from "./components/FaceDetection/FaceDetection";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/register/register";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "31f364fb4f04452cbbffa6c93266250c"
});

const particleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#966126"
    },
    line_linked: {
      distance: 100,
      color: "#0e1c31",
      opacity: 0.9,
      width: 1.9,
      shadow: {
        enable: true,
        color: "red",
        blur: 2
      }
    }
    // move: {
    //   enable: true,
    //   speed: 6,
    //   direction: "none",
    //   random: false,
    //   straight: false,
    //   out_mode: "out",
    //   bounce: false,
    //   attract: {
    //     enable: false,
    //     rotateX: 600,
    //     rotateY: 1200
    //   }
    // }
  }
  // interactivity: {
  //   detect_on: "canvas",
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "repulse"
  //     },
  //     onclick: {
  //       enable: true,
  //       mode: "push"
  //     },
  //     resize: true
  //   }
  // }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
      box: {},
      route: "SignIn",
      isSignedIn: false
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  calculateFaceLocation = data => {
    const clarifiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(clarifiFace);
    return {
      leftCol: clarifiFace.left_col * width,
      topRow: clarifiFace.top_row * height,
      rightCol: width - clarifiFace.right_col * width,
      bottomRow: height - clarifiFace.bottom_row * height
    };
  };

  displayFaceBox = box => {
    this.setState({ box: box });
  };

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch(err => {
        console.log(err);
      });
  };

  onClickRouteChange = route => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation
          isSignedIn={this.state.isSignedIn}
          onClickRouteChange={this.onClickRouteChange}
        />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceDetection box={this.state.box} imgUrl={this.state.imgUrl} />
          </div>
        ) : this.state.route === "SignIn" ? (
          <SignIn onClickRouteChange={this.onClickRouteChange} />
        ) : (
          <Register onClickRouteChange={this.onClickRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
