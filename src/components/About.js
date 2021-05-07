import React from "react";
import InfoIcon from '@material-ui/icons/Info';
import Divider from "./Divider";

function About(){
  return (
    <section className="page-section bg-secondary about-section" id="about">
      <container className="container about-container">
        <h2 className="about-heading text-center text-uppercase mb-0 display-4">About</h2>

        <Divider 
          dividerIcon= {<InfoIcon/>}
        />

        <div className="row">
          <div className="col-lg-6 mr-auto vertical-center">
            <img src="images/me.png" id="meImg" alt="me"/>
          </div>
          <div className="col-lg-6 mr-auto font-weight-light vertical-center">
            <p className="lead">
              Hello, world! My name is Derek Foley. I am a web and app developer and a lover of learning. Thanks
              for joining me on my journey! Please find my portfolio, curriculum vitae,
              and research below. Feel free to contact me if you have
              thoughts, tips, or just would like to say hello.
            </p>
          </div>
        </div>

      </container>
    </section>
  )
}

export default About;