import React from "react";
import "./Programs.css";
const Programs = () => {
  return (
    <div className="Programs" id="services">
      <section className="Our-services">
        <h3>Our Services</h3>
        <div className="services-container">
          <div className="services-cards">
            <div className="services-content">
              <h2 className="services-heading">Metal fabrication Services</h2>
              <p className="services-text">
                Our passion for metal fabrication goes beyond the ordinary we -
                thrive on challenges and turn concepts into reality.
              </p>
              <ul>
                <li>Gates & doors Fabrication services</li>
                <li>Windows Fabrication services</li>
                <li>Roof Fabrication services</li>
                <li> metal stamping</li>
                <li>mobile welding</li>
              </ul>
            </div>
          </div>
          <div className="services-cards">
            <div className="services-content">
              <h2 className="services-heading">forming services</h2>
              <p className="services-text">
              Our zeal for forming surpasses conventional limits; we excel amidst challenges, turning ideas into tangible outcomes.
              </p>
              <ul>
                <li>painting, plating, anodizing and powder coating</li>
                <li>Bending and Equipment installation</li>
                <li>Press breaking services</li>
                <li>metal art and sculputures</li>
                <li>Roll forming</li>
              </ul>
            </div>
          </div>
          <div className="services-cards">
            <div className="services-content">
              <h2 className="services-heading">Your Needs</h2>
              <p className="services-text">
                {" "}
                With years of experience and a dedication to excellence, we have
                earned a reputation for delivering top-notch solutions tailored
                to your unique specifications.
              </p>
              <ul>
              <li>Automotive welding and (SMAW or MIG)</li>
                <li>metal repaire services</li>
                <li>sheet Metal fabrication</li>
                <li>Tube bending</li>
                <li>onsite welding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
