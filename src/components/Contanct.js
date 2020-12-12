import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="container contact-section">
      <div className="contact-detail-section">
        <h1 className="title-contact">Contact Me</h1>
        <div className="d-flex justify-content-center pt-5">
        <div className="form-text custom-form">
          <form>
            <div class="form-group">
              <label>Your Name</label>
              <input type="text" class="form-control" placeholder="enter your name here"/>
            </div>
            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control" placeholder="enter your email here"/>
            </div>
            <div class="form-group">
              <label>Subject</label>
              <input type="text" class="form-control" placeholder="enter message subject"/>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea class="form-control" rows="5" placeholder="enter your message"></textarea>
            </div>
            <button type="submit" class="btn btn-block">Submit</button>
          </form>
        </div>
        </div>
      </div>
    </section>
  )
}