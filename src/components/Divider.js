import React from "react";

function Divider(props) {
  const dividerColor = {
    color: props.dividerColor,
    backgroundColor: props.dividerColor,
    borderColor: props.dividerColor,
  };

  const dividerIconColor = {
    color: props.dividerColor,
    borderColor: props.dividerColor,
  };

  return (
    <div className="divider-custom">
      <div className="divider-custom-line " style={dividerColor}></div>
      <div className="divider-custom-icon" style={dividerIconColor}>
        {props.dividerIcon}
      </div>
      <div className="divider-custom-line" style={dividerColor}></div>
    </div>
  );
}

export default Divider;
