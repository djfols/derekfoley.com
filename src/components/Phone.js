import React from "react";
import food1a from "../images/phone_images/food1a.png"
import food1b from "../images/phone_images/food1b.png"
import food1c from "../images/phone_images/food1c.png"
import food2a from "../images/phone_images/food2a.png"
import food2b from "../images/phone_images/food2b.png"
import food2c from "../images/phone_images/food2c.png"
import food3a from "../images/phone_images/food3a.png"
import food3b from "../images/phone_images/food3b.png"
import food3c from "../images/phone_images/food3c.png"
import music1a from "../images/phone_images/music1a.png"
import music1b from "../images/phone_images/music1b.png"
import music1c from "../images/phone_images/music1c.png"
import music2a from "../images/phone_images/music2a.png"
import music2b from "../images/phone_images/music2b.png"
import music2c from "../images/phone_images/music2c.png"
import music3a from "../images/phone_images/music3a.png"
import music3b from "../images/phone_images/music3b.png"
import music3c from "../images/phone_images/music3c.png"
import show1a from "../images/phone_images/show1a.png"
import show1b from "../images/phone_images/show1b.png"
import show1c from "../images/phone_images/show1c.png"
import show2a from "../images/phone_images/show2a.png"
import show2b from "../images/phone_images/show2b.png"
import show2c from "../images/phone_images/show2c.png"
import show3a from "../images/phone_images/show3a.png"
import show3b from "../images/phone_images/show3b.png"
import show3c from "../images/phone_images/show3c.png"
import travel1a from "../images/phone_images/travel1a.png"
import travel1b from "../images/phone_images/travel1b.png"
import travel1c from "../images/phone_images/travel1c.png"
import travel2a from "../images/phone_images/travel2a.png"
import travel2b from "../images/phone_images/travel2b.png"
import travel2c from "../images/phone_images/travel2c.png"
import travel3a from "../images/phone_images/travel3a.png"
import travel3b from "../images/phone_images/travel3b.png"
import travel3c from "../images/phone_images/travel3c.png"


class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
       music1b,
       music1a,
       music1b,
       music1c,
       music2b,
       music2a,
       music2b,
       music2c,
       music3b,
       music3a,
       music3b,
       music3c,
       show1b,
       show1a,
       show1b,
       show1c,
       show2b,
       show2a,
       show2b,
       show2c,
       show3b,
       show3a,
       show3b,
       show3c,
       food1b,
       food1a,
       food1b,
       food1c,
       food2b,
       food2a,
       food2b,
       food2c,
       food3b,
       food3a,
       food3b,
       food3c,
       travel1b,
       travel1a,
       travel1b,
       travel1c,
       travel2b,
       travel2a,
       travel2b,
       travel2c,
       travel3b,
       travel3a,
       travel3b,
       travel3c,
      ],
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 1000);
  }

  render() {
    return (
      <div className="phone">
        <img
          src={this.state.images[this.state.currentImage]}
          alt="RecspotApp"
          className="phone"
        />{" "}
      </div>
    );
  }
}

export default Phone;
