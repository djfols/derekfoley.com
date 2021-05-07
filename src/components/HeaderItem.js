import React from "react";

function HeaderItem(props) {
  return (
    <li className="nav-item mx-0 mx-lg-1">
      <a
        className="nav-link py-0 px-0 px-lg-3 px-md-2 rounded"
        href={props.hrefTag}
      >
        {props.tag}
      </a>
    </li>
  );
}

export default HeaderItem;
