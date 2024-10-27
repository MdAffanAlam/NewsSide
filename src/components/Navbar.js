import React, { Component } from "react";
import { FaHome, FaFutbol, FaNewspaper, FaFilm, FaTv, FaSun, FaMoon } from "react-icons/fa"; 
import { SiNextdotjs } from "react-icons/si";
import { NavLink } from "react-router-dom";
import ThemeContext from '../context/ThemeContext'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Navbar extends Component {
   static contextType = ThemeContext;  

  handleMode = () => {
    const { toggleTheme } = this.context;  
    toggleTheme();  
  };
  async componentDidMount() {
    this.getData();

    AOS.init({
      duration: 1000, 
      once: false,
    });
  }

  render() {
    const { isDarkMode } = this.context;  
    let { title } = this.props;
    
    return (
   
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${isDarkMode?'bg-opacity-100':'bg-opacity-75'}`} data-aos="zoom-out" >
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <SiNextdotjs style={{ fontSize: "1.5em" }} />{" "}
              {title}
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    <FaHome className="text-info mb-1" /> Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sports">
                    <FaFutbol className="text-success mb-1" /> Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/politics">
                    <FaNewspaper className="text-primary mb-1" /> Politics
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/entertainment">
                    <FaFilm className="text-warning mb-1" /> Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/serials">
                    <FaTv className="text-danger mb-1" /> Serials
                  </NavLink>
                </li>
                <li
                  className="mt-2 h-5 bg-black bg-opacity-25"
                  style={{
                    borderRadius: "20px",
                    padding: "0 9px",
                    marginLeft: "8px",
                    marginBottom: "2px",
                    width: "fit-content",
                    cursor: "pointer"
                  }}
                  onClick={this.handleMode}
                >
                  {isDarkMode ? (
                    <FaMoon style={{ color: "yellow" }} size={17} className="transition-opacity duration-300"/>
                  ) : (
                    <FaSun style={{ color: "yellow" }} size={17} className="transition-opacity duration-300"/>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
