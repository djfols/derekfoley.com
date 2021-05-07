import React from "react";
import Divider from "./Divider";

function PortfolioText(props) {
  const PortfolioTextStyle = {
    color: props.descriptionColor,
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={PortfolioTextStyle}
      className="col-md-5 card-description d-flex align-items-center"
    >
      <div className="card-body portfolio-description">
        <h2 style={PortfolioTextStyle} className="card-title portfolio-heading">
          {props.portfolioTitle}
        </h2>
        <Divider
          dividerColor={props.descriptionColor}
          dividerIcon={props.descriptionIcon}
        />
        <div className="card-text text-black portfolio-text">
          {props.portfolioDescription}
        </div>
      </div>
    </div>
  );
}

export default PortfolioText;
