import React from 'react';
import '../App.css'
import Button from '@material-ui/core/Button';
import CV from '@material-ui/icons/InsertDriveFile';
import AOS from 'aos'

export default function AboutMe() {
  return (
    <section id="aboutme" className="aboutme-section container">
      <div className="aboutme-detail-section text-white" data-aos-offset="500">
        <h1 className="title-aboutme">About Me</h1>
        <p className="aboutme-text text-justify">
          Hello, I'm Rusiru Abhisheak Vikum Bandara and I am Software Engineering undergraduate at Sri Lanka Institute of Information Technology (SLIIT).
          Interested in web application development using latest web technologies and frameworks, mobile application development and data strutures
          and algorithms. I'm also passionate about learn new things quickly, build new products by appling software engineering concepts and hunger to
          work with cutting-edge technologies.</p>
        <div data-aos="fade-up" data-aos-duration="1400">
            <Button
              variant="contained"
              className="download-btn"
              startIcon={<CV/>}
              style={{
                outline: 'none', 
                fontFamily: 'Lexend Deca Regular', 
                background: '#1E90FF', 
                color: '#ffffff',
                height: '50px',
                borderRadius: '10px',
                marginTop: '10px',
                marginBottom: '40px'
              }}
              disableElevation
            >
              get my cv here
            </Button>
          </div>
      </div>
    </section>
  )
}