import React from "react";
import image1 from "../images/recspot1.gif";
import image2 from "../images/recspot2.gif";
import image3 from "../images/recspot3.gif";
import image4 from "../images/recspot4.gif";


class Recspot extends React.Component {
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
      ]
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 12000);
  }

  render() {
    return (
      <div className="recspot-container">
        <img
          src={this.state.images[this.state.currentImage]}
          alt="Recspot"
          className="recspot-image"
        />
      </div>
    );
  }
}

export default Recspot;
