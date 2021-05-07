import React from "react";

function Modal(props) {
  function hideModal() {
    props.onRemove(props.id);
  }

const node = React.useRef();

const handleClick = e => {
  if (node.current.contains(e.target)) {
    console.log("modal clicked");
    return;
  } else {
    hideModal();
  }
}

React.useEffect(() => {
  document.addEventListener("mousedown", handleClick);
  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
}, []);


  return (
    <div key={props.id} className="centerFlex">
        <div ref={node} className="modal-content">
          <span className="close" onClick={hideModal} data-modal={props.id}>
            &times;
          </span>
          <img className="modal-img cv-img-color" src={props.modalPicture} alt="Modal"/>
          <p>{props.description}</p>
          <div className="d-flex justify-content-center">{props.link}</div>
          </div>
        </div>
  );
}

export default Modal;
