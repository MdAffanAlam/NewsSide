import React from "react";

//import { Link,  } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-3 bg-dark text-black w-full fw-bold  bg-primary bg-opacity-50">
      <div className="container text-center footer">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <i
             class="fa-solid fa-file-word"
            style={{ marginLeft: "8px", marginRight: "8px" }}
          ></i>NewsSide. All Rights Reserved.
        </p>
        {/* style={{ marginLeft: "8px", marginRight: "8px" }} <div className="social-icons mt-3">
          * Social Media Icons 
          <Link to='#'target="_blank" rel="noopener noreferrer" className="me-3">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer" className="me-3">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer" className="me-3">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </Link>
  </div>*/}
      </div>
    </footer>
  );
};

export default Footer;