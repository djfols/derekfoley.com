import React from "react";

function Footer() {
  return (
    <footer className="footer font-white text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="mb-4">LOCATION</h4>
            <p className="mb-0">Columbus, OH</p>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0 font-white">
            <h4 className="mb-4">AROUND THE WEB</h4>
            <a
              className="btn btn-social mx-1"
              href="https://www.linkedin.com/in/derek-foley-5545ba47"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/linkedinlogo.png" className="poober-logo" alt="linkedin"/>
            </a>
            <a
              className="btn btn-social mx-1"
              href="https://www.github.com/djfols"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/githublogo.png" className="poober-logo" alt="github"/>
            </a>
          </div>

          <div className="col-lg-4 font-white">
            <h4 className="mb-4">ABOUT THIS WEBSITE</h4>
            <p className="mb-0">
              This website was created by Derek Foley for fun and practice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
