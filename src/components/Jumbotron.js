import React, { useState } from "react";
// import GifImages from "../content/gif";
import logo from "../content/logo.png";
// import BackgroundImage from "../content/gif-images/1.jpg"

function Jumbotron() {
  const [backgroundImage, setBackground] = useState("(gif-images/1.jpg)");

  function trackScrollPosition() {
    const y = window.scrollY;
    const label = Math.min(Math.floor(y / 45.6) + 1, 20);
    const imageToUse = "gif-images/" + label + ".jpg"; //GifImages[label];
    setBackground(imageToUse);
    console.log(imageToUse);
    console.log(y);
  }
  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      trackScrollPosition();
    });
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="jumbotron jumbotron-fluid masthead"
    >
      <img className="masthead-avatar mb-5" src={logo} alt="" />
      <h1 className="display-4 name-heading">&lt;DEREK FOLEY&gt;</h1>
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <p className="dash-icon">//</p>
        </div>
        <div className="divider-custom-line"></div>
      </div>
      <p className="masthead-subheading font-weight-light mb-0">
        Web Developer - Geologist - Writer
      </p>
    </div>
  );
}

export default Jumbotron;
