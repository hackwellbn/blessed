import React from "react";
import "./Footer.css";
import footer_image from "../../assets/footer-bg.svg";
import footer_logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer-section">
          <div className="footer-title">
           <a href="http://localhost:5173"><img src={footer_logo} alt="" /> </a> 

          </div>
          <div className="footer-links">
            <ul>
              <h6>connect with us</h6>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">FaceBook</a>
              </li>
              <li>
                <a href="https://wa.me/+254741887526"  target="_blank" rel="noopener noreferrer">Whatsapp</a>
              </li>
              <li>
                <a href="">linkedIn</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <ul>
              <h6>Reach Us</h6>
              <li>
                <a href="#">support@Blessedfabricators.com</a>
              </li>
              <li>
                <a href="mailto:Blessedfabricator@gmail.com">Blessedfabricators@gmail.com</a>
              </li>
             
            </ul>
          </div>
          <div className="footer-links">
            <ul>
              <h6>Donate</h6>
              <li>
                <a href="https://wa.me/+254790133166"  target="_blank" rel="noopener noreferrer">campredemption.org</a>
              </li>
             
             
            </ul>
          </div>
        </div>
        <div className="last-section">
          <img src={footer_image} alt="" className="footer-image" width="150" />
          <p>&copy; 2024 Blessed Fabricators || designed by <a  href="https://wa.me/+254738208799" target="_blank" rel="noopener noreferrer">SOFT<span>Net </span> </a></p>
          <img src={footer_image} alt="" className="footerimage" width="150" />
        </div>

      </footer>
    </div>
  );
};

export default Footer;
