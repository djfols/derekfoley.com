import React from "react";
import Divider from "./Divider";
import CodeIcon from "@material-ui/icons/Code";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PortfolioText from "./PortfolioText";
import Logo from "../content/logo.png";
import PooberLogo from "../content/pooberlogo.png";
import RecspotIcon from "../content/RecspotLogo.png";
import RecspotImage from "../content/Recspotimage.png";

function Portfolio() {
  return (
    <section className="font-black" id="portfolio">
      <h1 className="display-4 text-center text-uppercase mb-0 text-center font-black portfolio-heading">
        Portfolio
      </h1>

      <Divider dividerColor="black" dividerIcon={<CodeIcon />} />

      <div className="card mb-3 portfolio-light portfolio-card font-black">
        <div className="row no-gutters">
          <div className="col-md-7 d-flex align-items-center">
            <div className="portfolio-media">
              <img
                src={RecspotImage}
                className="recspot-image"
                alt="TheRecSpot"
              />
            </div>
          </div>

          <PortfolioText
            portfolioTitle="The RecSpot"
            descriptionColor="black"
            descriptionIcon={<img src={RecspotIcon} className="poober-logo" alt="RecSpot"/>}
            portfolioDescription={
              <span>
                RecSpot is a social media start-up focusing on building a
                network of individuals sharing recommendations of shows,
                restaurants, movies, music, and just about everything else. Recspot hired me to build this dynamic website using React so they can allow users to sign up for early access and learn more about their company. Check out the website and Recspot
                <a href="https://www.therecspot.com/" target="blank">
                  {" "}
                  here.
                </a>
              </span>
            }
          />
        </div>
      </div>

      <div className="card mb-3 portfolio-dark  bg-secondary portfolio-card">
        <div className="row no-gutters">
        <PortfolioText
            portfolioTitle="Four In A Row"
            descriptionColor="white"
            descriptionIcon={<PhoneIphoneIcon />}
            portfolioDescription="For legal purposes, this mobile game is called Four In A Row. This project was built with Flutter."
          />
          <div className="col-md-7 d-flex align-items-center">
            <div className="portfolio-video-horizontal">
              <iframe
                width="100%"
                height="315px"
                className="horizontal-media"
                src="https://www.youtube.com/embed/nVxMYYK3Zhw"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Four In A Row"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 portfolio-card font-black">
        <div className="row no-gutters">
          <div className="col-md-7">
            <div className="portfolio-video">
              <iframe
                width="300"
                height="560"
                className="card-img portfolio-media"
                src="https://www.youtube.com/embed/WAY-qCnIE6o"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Poober"
              ></iframe>
            </div>
          </div>

          <PortfolioText
            portfolioTitle="Poober"
            descriptionColor="black"
            descriptionIcon={<img src={PooberLogo} className="poober-logo" alt="Poober"/>}
            portfolioDescription="This project was built with Flutter, utilizing Firebase and Google Maps API. It allows for user registration and log in, user location data, and using Google Maps SDK, Places API, and Directions API, locate nearby restrooms and direct the user to them. This is a work in progress. I learned about API use, mobile geolocation, user registration, and animations in this project."
          />
        </div>
      </div>

      <div className="card mb-3 portfolio-dark bg-secondary portfolio-card">
        <div className="row no-gutters">
          <PortfolioText
            portfolioTitle="derekfoley.com"
            descriptionColor="white"
            descriptionIcon={<LaptopMacIcon />}
            portfolioDescription="My personal playground, I've rebuilt this website three times. First, I used Bootstrap, HTML, CSS, and basic Javascript, utilizing a stock-theme from Bootstrap. Next, I rebuilt the site from scratch, using only my own code. This is the third version where I used React, Javascript, Bootstrap, Node, and Mongoose, making the website more dynamic and modular."
          />
          <div className="col-md-5 portfolio-media">
            <img
              src={Logo}
              className="card-img portfolio-media"
              alt="my logo"
            />
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default Portfolio;
