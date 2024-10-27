import React, { Component } from "react";
import ThemeContext from "../context/ThemeContext";

export default class Footer extends Component {
  static contextType=ThemeContext
  render() {
    const { isDarkMode } = this.context;
    return (
      <footer className={`footer py-3 bg-dark ${isDarkMode}?'text-white': 'text-black'; w-full fw-bold bg-primary bg-opacity-50`}>
        <div className="container text-center footer">
          <p>
            &copy; {new Date().getFullYear()}
            <i
              className="fa-solid fa-file-word"
              style={{ marginLeft: "8px", marginRight: "6px" }}
            ></i>
            NewsSide. All Rights Reserved.
          </p>
          {/* Uncomment and customize for social media icons */}
          {/* 
          <div className="social-icons mt-3">
            <Link to='#' target="_blank" rel="noopener noreferrer" className="me-3">
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
          </div>
          */}
        </div>
      </footer>
    );
  }
}
