import React, { useState } from "react";
import CVData from "./CVData";
import ModalData from "./ModalData";
import Modal from "./Modal";
import Divider from "./Divider";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import ResumeCard from "./ResumeCard";

function CV(cvItem, modalItem) {

  const [modalOpen, toggleModal] = useState([]);

  function showModal(id) {
    toggleModal(prevModal => {
      return [...prevModal, ModalData[id]]
    });
  }

  function removeModal() {
    toggleModal([]);
  }

  return (
    <section id="cv" alignment="center">
      <h1 className="contact-header text-center text-uppercase font-black mb-0">
        Curriculum Vitae
      </h1>
      <Divider dividerColor="black" dividerIcon={<DirectionsWalkIcon />} />
      <div>
        {modalOpen.map((modalItem, index) => {
          return(
            <Modal 
              key = {index}
              id= {index}
              modalPicture= {modalItem.modalPicture}
              description= {modalItem.description}
              onRemove = {removeModal}
              link = {modalItem.link}
            />
          )
        }
        )}
      </div>
      
      <div className="row">
        {CVData.map((cvItem, index) => {
          return(<ResumeCard
            key={index}
            id={index}
            title={cvItem.title}
            tag={cvItem.tag}
            picture={cvItem.picture}
            onShow = {showModal}
          />)
        }
        )}
      </div>
      <div className="text-center cv-button">
        <a
          href="papers/Derek_Foley_Resume.pdf"
          target="_blank"
          className="btn btn-dark btn-xl btn-block"
          role="button"
        >
          Check out my resume <i className="far fa-address-card"></i>
        </a>
      </div>
    </section>
  );
}

export default CV;
