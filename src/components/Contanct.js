import React, {useState} from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1239up7', 'template_67ff31d', e.target, 'user_27f2UyIFJraU5LDwZm40I')
      .then((result) => {
          return (
            <div className="alert alert-success" role="alert">
              Your message successfully sent to the Rusiru, Thank you.
            </div>
          )
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <section id="contact" className="container contact-section">
      <div className="contact-detail-section">
        <h1 className="title-contact">Contact Me</h1>
        <div className="d-flex justify-content-center pt-5">
        <div className="form-text custom-form">
          <form onSubmit={sendEmail}>
            <div class="form-group">
              <label>Your Name</label>
              <input type="text" 
                class="form-control" 
                placeholder="enter your name here"
                name="name"
                required/>
            </div>
            <div class="form-group">
              <label>Email address</label>
              <input type="email" 
                class="form-control" 
                placeholder="enter your email here" 
                name="email"
                required/>
            </div>
            <div class="form-group">
              <label>Subject</label>
              <input type="text" 
                class="form-control" 
                placeholder="enter message subject"
                name="subject"
                required/>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea class="form-control" 
                rows="5" 
                placeholder="enter your message"
                name="message" 
                required></textarea>
            </div>
            <button type="submit" class="btn btn-block">Submit</button>
          </form>
        </div>
        </div>
      </div>
    </section>
  )
}