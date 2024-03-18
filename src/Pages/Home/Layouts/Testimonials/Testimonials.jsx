import React from "react";
import "./Testimonials.css";
import upset from '../../../../assets/portrait-upset-american-black-person_23-2148749581.jpg'
 import man from "../../../../assets/man.jpg";
import woman from "../../../../assets/lamyportrait.png";


const Testimonials = () => {
  return (
    <div className="wrapper">
      <div className="Testimonials-container">
        <div className="Testimonials-cards">
          <div className="Testimonials-content">
            <p>
              "i am very pleased with how the Blessed Fabricstors managed to
              design my windows and doors, I mean i just gave Quotations and all
              was done perfectly."
            </p>
            <div className="Testimanials-name">
              <h3>Albert Odhiambo</h3>

              <div className="Testimonials-image">
                <div className="image1">
                  <img src={man} alt="Albert's image" /> 
                </div>
              </div>
              <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9734;</span>
                <span class="star">&#9734;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Testimonials-container">
        <div className="Testimonials-cards">
          <div className="Testimonials-content">
            <p>
              "Absolutely impressed with the craftsmanship! Blessed Fabricators
              transformed my ideas into stunning metal art, exceeding my
              expectations with their attention to detail and creativity."
            </p>
            <div className="Testimanials-name">
              <h3>Hellen Waura</h3>
              <div className="Testimonials-image">
                <div className="image1">
                   <img src={woman} alt="Hellen's image" srcset="" /> 
                </div>
              </div>
              <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9734;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Testimonials-container">
        <div className="Testimonials-cards">
          <div className="Testimonials-content">
            <p>
              " I never knew welding could turn my vision into reality. Blessed
              Fabricators not only welded metals but also shaped my dreams,
              creating functional and beautiful pieces that added a touch of
              elegance to my space."
            </p>
            <div className="Testimanials-name">
              <h3>Eugene Hassan</h3>
              <div className="Testimonials-image">
                <div className="image1">
                  <img src={upset} alt="hassan' image" srcset="" /> 
                </div>
              </div>
              <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9734;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
