import React from "react";

import "./Programs.css";

const Programs = () => {
  return (
    <div className="whole-services" id="services">
      <h4>Our services</h4>
      <div className="our-services">
        <div className="cards">
          <div className="card-body">
            <div className="card-text">
              <h4>metal Fabrication services</h4>
              <p>
                Our passion for metal fabrication goes beyond the ordinary we -
                thrive on challenges and turn concepts into reality.
              </p>
              <ul>Gates & doors Fabrication services</ul>
              <ul>Windows Fabrication services</ul>
              <ul>Roof Fabrication services</ul>
              <ul>metal stamping</ul>
              <ul>mobile welding</ul>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-body">
            <div className="card-text">
              {/* <h4>Metal coating</h4> */}
              <p>
                {" "}
                With years of experience and a dedication to excellence, we have
                earned a reputation for delivering top-notch solutions tailored
                to your unique specifications.do not hesitate to call us.
              </p>
              <ul>metal repaire services</ul>
              <ul>Automotive welding and (SMAW or MIG)</ul>
              <ul>sheet Metal fabrication</ul>
              <ul>Tube bending</ul>
              <ul>onsite welding</ul>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-body">
            <div className="card-text">
              <h4>Forming services</h4>
              <p>
                Blessed Fabricators is a website where you can find information
                about our products and services.
              </p>
              <ul>press Breaking services</ul>
              <ul>Roll forming</ul>
              <ul>metal art and sculputures</ul>
              <ul>Bending and Equipment installation </ul>
              <ul>painting, plating, anodizing and powder coating</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
