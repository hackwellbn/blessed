import React, { useState } from "react";
// import { Link } from "react-scroll";
import { Outlet, Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  // const [showNavbar, SetShowNavbar] = useState(true);
  // useEffect(() => {
  //   const handlescroll = () => {
  //     const scrollPos = window.scrollY;

  //     if (scrollPos > 200) {
  //       SetShowNavbar(false);
  //     } else {
  //       SetShowNavbar(true);
  //     }
  //   };
  //   window.addEventListener("scroll, handlescroll");
  //   return () =>{
  //     window.addEventListener ('scroll', handlescroll);
  //   }
  // }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <nav>
        <span
          class="material-symbols-outlined menu stack"
          onClick={toggleSidebar}
        >
          menu
        </span>
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <span
            className="material-symbols-outlined menu "
            onClick={toggleSidebar}
          >
            close
          </span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* Use regular anchor links with IDs for smooth scrolling */}
              <a smooth={true} href="/#services">
                services
              </a>
            </li>
            <li>
              {/* Use regular anchor links with IDs for smooth scrolling */}
              <a smooth={true} href="/#testimonials">
                testimonials
              </a>
            </li>

            <li>
              <Link to="/Blogs" smooth={true} duration={500}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
