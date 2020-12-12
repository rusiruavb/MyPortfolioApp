import React, {useEffect} from 'react';
import '../App.css'
import AOS from 'aos'
import anime from 'animejs'
import 'aos/dist/aos.css'

// material ui icons
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Instagram from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Location from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import CV from '@material-ui/icons/InsertDriveFile';

export default function AboutMe() {

  useEffect(() => {
    AOS.init({
      duration: 1200
    })

    const script = document.createElement('script')
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"
    script.async = true
    document.body.appendChild(script)

    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.ml11',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 500
      })
      .add({
        targets: '.ml11 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 400,
        offset: '-=775',
        delay: (el, i) => 20 * (i+1)
      })
  
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="home" className="home-section container">
      <div className="row">
        <div className="col-lg-7 col-sm-12 col-md-12">
          <div className="detail-section">
          <h1 class="ml11">
            <span class="text-wrapper">
              <span class="letters title-name">Rusiru Abhisheak</span>
            </span>
          </h1>
          <ul class="list-inline text-white" style={{fontWeight: '500'}}>
            <li class="list-inline-item mb-2">
              <div data-aos="fade-right" data-aos-duration="500">
                <Chip label="Problem solver" variant="outlined" style={{fontFamily: 'Blinker', fontSize: '15px'}} />
              </div>
            </li>
            <li class="list-inline-item mb-2">
              <div data-aos="fade-right" data-aos-duration="600">
                <Chip label="YouTube Content Creator" variant="outlined" style={{fontFamily: 'Blinker', fontSize: '15px'}} />
              </div>
            </li>
            <li class="list-inline-item mb-2">
              <div data-aos="fade-right" data-aos-duration="700">
                <Chip label="Undergraduate Student" variant="outlined" style={{fontFamily: 'Blinker', fontSize: '15px'}} />
              </div>
            </li>
            <li class="list-inline-item mb-2">
              <div data-aos="fade-right" data-aos-duration="800">
                <Chip label="Frontend Developer" variant="outlined" style={{fontFamily: 'Blinker', fontSize: '15px'}} />
              </div>
            </li>
            <li class="list-inline-item mb-2">
              <div data-aos="fade-right" data-aos-duration="900">
                <Chip label="Tech Enthusiast" variant="outlined" style={{fontFamily: 'Blinker', fontSize: '15px'}} />
              </div>
            </li>
            <li class="list-inline-item mb-2">
              <div data-aos="fade-right" data-aos-duration="1000">
                <Chip label="Blogger" variant="outlined" style={{fontFamily: 'Blinker', fontSize: '15px'}} />
              </div>
            </li>
            <li class="list-inline-item mb-2">
              <div data-aos="fade-right" data-aos-duration="1100">
                <Chip label="Backend Developer" variant="outlined" style={{fontFamily: 'Blinker', fontSize: '15px'}} />
              </div>
            </li>
          </ul>
          <div className="details-text" data-aos="fade-up" data-aos-duration="400">
            <i className="material-icons"><Location style={{ fontSize: 30 }}/></i>
            <span className="a">&nbsp;&nbsp;&nbsp;Malabe, Western Province, Sri Lanka</span>
          </div>
          <div className="details-text" data-aos="fade-up" data-aos-duration="600">
            <i className="material-icons"><MailIcon style={{ fontSize: 30 }}/></i>
            <span>
              &nbsp;&nbsp;&nbsp;<a href="https://mail.google.com/mail/?view=cm&fs=1&to=rusiruavb98@gmail.com" className="a">
                rusiruavb98@gmail.com
              </a>
            </span>
          </div>
          <div className="details-text" data-aos="fade-up" data-aos-duration="800">
            <i className="material-icons"><MailIcon style={{ fontSize: 30 }}/></i>
            <span>
              &nbsp;&nbsp;&nbsp;<a href="mailto:it19104218@my.sliit.lk" className="a">
                it19104218@my.sliit.lk
              </a>
            </span>
          </div>
          <div className="details-text" data-aos="fade-up" data-aos-duration="1000">
            <i className="material-icons"><PhoneAndroidIcon style={{ fontSize: 30 }}/></i>
            <span className="a">&nbsp;&nbsp;&nbsp;+94 77 662 1324</span>
          </div>
          <div className="pt-3" data-aos="fade-up" data-aos-duration="1200">
            <a href="https://www.linkedin.com/in/rusiru-abhisheak/" className="mt-2"><LinkedIn style={{fontSize: '50px'}} /></a>
            <a href="https://github.com/rusiruavb" className="social-icons"><GitHub style={{fontSize: '42px', color: 'black'}} /></a>
            <a href="https://www.youtube.com/rusiruabhisheak" className="social-icons"><YouTube style={{fontSize: '50px', color: 'red'}} /></a>
            <a href="https://www.facebook.com/rusiruabhisheak" className="social-icons"><Facebook style={{fontSize: '50px', color: 'darkblue'}} /></a>
            <a href="https://www.instagram.com/ravb.abhisheak/" className="social-icons"><Instagram style={{fontSize: '50px'}} /></a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1400">
            <Button
              variant="contained"
              className="download-btn"
              style={{
                outline: 'none', 
                fontFamily: 'Lexend Deca Regular', 
                background: '#1E90FF', 
                color: '#ffffff',
                height: '50px',
                borderRadius: '10px',
                marginTop: '10px'
              }}
              disableElevation
            >
              Click here to Hire Me
            </Button>
          </div>
          </div>
        </div>
        <div className="col-lg-5 d-none d-lg-block ">
          <div data-aos="zoom-in" data-aos-duration="800" data-aos-once="true" className="d-flex justify-content-center">
            <img src="../profile.png" alt="Image of Rusiru" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  )
}