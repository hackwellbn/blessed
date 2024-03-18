import React from "react";
import "./Hero.css";
import Hero_img from "../../../../assets/faq_graphic.jpg";

const Hero = () => {
  return (
    <div>
      <section className="hero-banner">
        <div className="banner-section-text-area">
          <h2>
            Discover our Metal <span className="span-linear">designs that</span>{" "}
          </h2>
          <h3>bring your impossible to possible</h3>
            <a smooth={true} href="#about-us" ><button className="banner-btn btn">about Us{" "}</button>
            </a>
        </div>
      </section>
      <div className="Reasons">
        <h1>Why choose Blessed Fabricators? </h1>
        <div className="reasons-img">
          <div className="Hero-img">
            <img src={Hero_img} alt="Blessed Fabricators" />
            <div className="hero-text-area">
              <p>
                <span>Precision Craftsmanship:</span> Our Skilled Artisans Bring
                Years Of Expertise To Every Project
              </p>
              <p>
                <span>Expertise:</span> Our Skilled Artisans Bring Years Of
                Expertise To Every Project
              </p>
              <p>
                <span>Client-Centric Approach:</span> Your Satisfaction Is Our
                Priority; We Work Closely With You To Understand Your Unique
                Needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
