import React from "react";
import "./Portfolio.css";

import { Outlet, Link } from "react-router-dom";

import portfolio_image from "../../../../assets/balcony.jpeg";
import portfolio_image_2 from "../../../../assets/steelwindow.jpeg";
import C_shapedRods from "../../../../assets/c_shapedRods.jpeg";
import drapeRod from "../../../../assets/drapeRode.jpeg";
import doubleStrong from "../../../../assets/doubleStrong.jpeg";
import round from "../../../../assets/round.jpeg";
// import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <div className="portflio-text">
        <p>
          These modern windows feature a stylish and minimalist design,
          enhancing the contemporary appeal of numerous homes. Crafted with
          steel frames, these windows provide durability, strength, and
          security, all while welcoming abundant natural light into your living
          space.
        </p>
      </div>
      <div className="image-portflio">
        <img src={portfolio_image_2} alt="portfolioimage" />
      </div>

      <div className="image-portflio">
        <img src={portfolio_image} alt="portfolioimage" />
      </div>

      <div className="portflio-text">
        <p>
          enjoy the panoramic views and gentle breeze as you transform your your
          balcony into personal oasis.Embrace the tranquility and elegance that
          this beautiful balcony brings to your living space
        </p>
      </div>
      <div className="rods-section">
        <img src={C_shapedRods} alt="C_shapedRods" height="310" />
        <img src={drapeRod} alt="drapeRod" height="310" />
        <img src={doubleStrong} alt="adjustable" height="310" />
        <img src={round} alt="roundWalls" height="310" />
      </div>
      <div className="rods-text-section">
        <p>
          Explore Our metal fitting designs from door knobs to hinges and rods,
          <br></br> i mean we mig your designs specs from simple to complex. try
          us today and make your dreams possible.
        </p>

        <a smooth={true} href="#contact-us">
          <button className="banner-btn btn">contact us </button>
        </a>
        <Link to="/Blogs" smooth={true} duration={500}>
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
