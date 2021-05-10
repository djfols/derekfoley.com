import React from "react";
import logo from "../content/logo.png";
import image1 from "./gif-images/1.jpg";
import image2 from "./gif-images/2.jpg";
import image3 from "./gif-images/3.jpg";
import image4 from "./gif-images/4.jpg";
import image5 from "./gif-images/5.jpg";
import image6 from "./gif-images/6.jpg";
import image7 from "./gif-images/7.jpg";
import image8 from "./gif-images/8.jpg";
import image9 from "./gif-images/9.jpg";
import image10 from "./gif-images/10.jpg";
import image11 from "./gif-images/11.jpg";
import image12 from "./gif-images/12.jpg";
import image13 from "./gif-images/13.jpg";
import image14 from "./gif-images/14.jpg";
import image15 from "./gif-images/15.jpg";
import image16 from "./gif-images/16.jpg";
import image17 from "./gif-images/17.jpg";
import image18 from "./gif-images/18.jpg";
import image19 from "./gif-images/19.jpg";
import image20 from "./gif-images/20.jpg";

class Jumbotron2 extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
      ],
    };
  }

  switchImage() {
    const screenHeight = window.innerHeight;
    if (screenHeight > 912) {
      const y = window.scrollY;
      const label = Math.min(Math.floor(y / (screenHeight / 20)), 20);
      this.setState({
        currentImage: label,
      });
    } else {
      const y = window.scrollY;
      const label = Math.min(Math.floor(y / 45), 20);
      this.setState({
        currentImage: label,
      });
    }

    return this.currentImage;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.switchImage, true);
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.state.images[this.state.currentImage]})`,
        }}
        className="jumbotron jumbotron-fluid masthead"
      >
        <img src={image1} className="preload-image" alt="img" />
        <img src={image2} className="preload-image" alt="img" />
        <img src={image3} className="preload-image" alt="img" />
        <img src={image4} className="preload-image" alt="img" />
        <img src={image5} className="preload-image" alt="img" />
        <img src={image6} className="preload-image" alt="img" />
        <img src={image7} className="preload-image" alt="img" />
        <img src={image8} className="preload-image" alt="img" />
        <img src={image9} className="preload-image" alt="img" />
        <img src={image10} className="preload-image" alt="img" />
        <img src={image11} className="preload-image" alt="img" />
        <img src={image12} className="preload-image" alt="img" />
        <img src={image13} className="preload-image" alt="img" />
        <img src={image14} className="preload-image" alt="img" />
        <img src={image15} className="preload-image" alt="img" />
        <img src={image16} className="preload-image" alt="img" />
        <img src={image17} className="preload-image" alt="img" />
        <img src={image18} className="preload-image" alt="img" />
        <img src={image19} className="preload-image" alt="img" />
        <img src={image20} className="preload-image" alt="img" />

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
}

export default Jumbotron2;
