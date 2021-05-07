import React   from "react";
import AddIcon from '@material-ui/icons/Add';

function ResumeCard (props) {

  function showModal() {
    props.onShow(props.id);
  }

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 no-gutters">

        <div className="card achievement-card">
          <img className="card-img cv-img" src={props.picture} alt="resume-card"/>
          <div className="card-img-overlay d-flex flex-column justify-content-between">
            <h3 className="portfolio-title font-white">{props.title}</h3>
            <p className="card-text font-white">{props.tag}</p>
            <button className="modal-button btn align-self-end" onClick={showModal} data-modal={props.id}><AddIcon/></button>
          </div>
        </div>

        
      </div>
  )
}

export default ResumeCard;