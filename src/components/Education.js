import React from 'react';
import school from '../images/school.png'
import university from '../images/university.png'

export default function Education() {
  return (
    <section id="education" className="container education-section">
      <div className="education-detail-section text-white">
        <h1 className="title-education">Education</h1>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="500">
            <div className="education-card">
              <div className="card-body">
                <img src={school} alt="school image" className="education-image" />
                <h1 className="education-title">Primay & Secondary Education</h1>
                <h3 className="school">Royal College Panadura</h3>
                <p className="education-text">Advanced Levle - Biological Stream</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
            <div className="education-card" data-aos="fade-up" data-aos-duration="500">
              <div className="card-body">
                <img src={university} alt="school image" className="education-image" />
                <h1 className="education-title">Higher Education</h1>
                <h3 className="school">Sri Lanka Institute of Information Technology</h3>
                <p className="education-text">
                  Specialization - Software Engineering <br/>
                  Grade Point Average (GPA) : 3.4
                </p>
              </div>
            </div>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </section>
  )
}