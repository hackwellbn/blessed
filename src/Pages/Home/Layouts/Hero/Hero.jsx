import React from "react";
import "./Hero.css";
import Hero_img from "../../../../assets/faq_graphic.jpg";

const Hero = () => {
  return (
    <div>
      <section className="hero-banner">
        <div className="banner-section-text-area">
          <h2>
            Unleash the Spark: <span className="span-linear">Precision</span>{" "}
          </h2>
          <h3> Welding Solutions Tailored for You</h3>
          <p className="intro-text">
            Welcome to a World of Craftsmanship and Precision. Our welding
            services ignite possibilities, merging expertise with innovation to
            deliver flawless results. Whether it's intricate metalwork or robust
            structural welding, we fuse skill with dedication, ensuring every
            project shines with durability and excellence. Step into our realm
            of welding mastery, where every weld tells a story of craftsmanship
            and quality.
          </p>
          <a smooth={true} href="#about-us">
            <button className="banner-btn btn">about Us </button>
          </a>
          <a smooth={true} href="#contact-us">
            <button className="banner-btn btn">contact us </button>
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
