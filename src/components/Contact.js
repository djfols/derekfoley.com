import React from "react";
import Divider from "./Divider";
import ChatIcon from '@material-ui/icons/Chat';

function Contact() {
  return (
    <section id="contact">

      <h1 class="contact-header text-center text-uppercase font-black mb-0">Contact Me</h1>

      <Divider 
        dividerColor="black" dividerIcon={<ChatIcon />}
      />

      <div class="row contact">
        <div class="col-lg-8 mx-auto">
          <form name="sentMessage" id="contactForm" novalidate="novalidate" action="https://formspree.io/xqkpdyvl"
          method="POST">
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name."/>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input class="form-control" name="_replyto" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."/>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."/>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea class="form-control" name="message" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."/>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br/>
            <div id="success"></div>
            <div class="form-group">
              <button type="submit" class="btn btn-dark btn-xl text-center" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact;