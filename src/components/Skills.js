import React from 'react';
import java from '../images/java.png'
import javascript from '../images/javascript.png'
import python from '../images/python.png'
import angular from '../images/angular.png'
import react from '../images/react.png'
import nodejs from '../images/node.png'
import mssql from '../images/sqlserver.png'
import mysql from '../images/mysql.png'
import bootstrap from '../images/bootstrap.png'
import php from '../images/php.png'
import android from '../images/android.png'
import vscode from '../images/vscode.png'
import visualstudio from '../images/visualstudeio.png'
import git from '../images/git.png'
import postman from '../images/postman.png'
import ecllipse from '../images/eclipse.png'
import intellij from '../images/intellijIDEA.png'
import material from '../images/materialui.png'
import firebase from '../images/firebase.png'
import npm from '../images/npm.png'
import photoshop from '../images/photoshop.png'
import filmora from '../images/filmora.png'
import xd from '../images/xd.png'
import office from '../images/office365.png'
import terminal from '../images/terminal.png'

export default function Skills() {
  return (
    <section id="skills" className="container skill-section">
      <div className="skill-detail-section">
        <h1 className="title-skills">Skills</h1>
        <h3 className="sub-title-skills">Programming Languages and Frameworks</h3>
        <div className="skill-cards">
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={java} className="skill-image" />
              <p>JAVA</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={python} className="skill-image" />
              <p>Python</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={javascript} className="skill-image" />
              <p>JavaScript</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={angular} className="skill-image" />
              <p>Angular</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={react} className="skill-image" />
              <p>React</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={nodejs} className="skill-image" />
              <p>Node JS</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={mssql} className="skill-image" />
              <p>SQL Server</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={mysql} className="skill-image" />
              <p>MySQL</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={php} className="skill-image" />
              <p>PHP</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={bootstrap} className="skill-image" />
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={android} className="skill-image" />
              <p>Android</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={material} className="skill-image" />
              <p>Material UI</p>
            </div>
          </div>
        </div>

        <h3 className="sub-title-skills">Tools and Technologies</h3>
        <div className="skill-cards">
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={git} className="skill-image" />
              <p>GIT</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={vscode} className="skill-image" />
              <p>VS Code</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={visualstudio} className="skill-image" />
              <p>Visual Studio</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={intellij} className="skill-image" />
              <p>IntelliJ IDEA</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={ecllipse} className="skill-image" />
              <p>Ecllipse</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={postman} className="skill-image" />
              <p>Postman</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={npm} className="skill-image" />
              <p>NPM</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={firebase} className="skill-image" />
              <p>Firebase</p>
            </div>
          </div>
        </div>
        <h3 className="sub-title-skills">Other</h3>
        <div className="skill-cards">
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={photoshop} className="skill-image" />
              <p>Photoshop</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500" className="aos-animate">
              <img src={xd} className="skill-image" />
              <p>Adobe XD</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={filmora} className="skill-image" />
              <p>Filmora</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={office} className="skill-image" />
              <p>Office 365</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={terminal} className="skill-image" />
              <p>Windows Terminal</p>
            </div>
          </div>
          <div className="skill-card">
            <div data-aos="fade-up" data-aos-duration="500">
              <img src={terminal} className="skill-image" />
              <p>Linux Terminal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}