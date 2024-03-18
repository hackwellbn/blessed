import React from "react";
import Hero from "./Layouts/Hero/Hero";
import Programs from "./Layouts/Programs/Programs";
import Portfolio from "./Layouts/Portfolio/Portfolio";
import Distinguish from "./Layouts/Distinguish/Distinguish";
import AboutPage from "./Layouts/AboutPage/AboutPage";
import Testimonials from "./Layouts/Testimonials/Testimonials";
import Contacts from "./Layouts/Contacts/Contacts";
import Footer from "../../Components/Footer/Footer";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Portfolio />
      <Distinguish />
      <AboutPage />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
