import React, { Component } from "react";
import { FaHome, FaFutbol, FaNewspaper, FaFilm, FaTv } from "react-icons/fa"; // Import necessary icons
import { SiNextdotjs } from "react-icons/si";
import { FaSun, FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    let { title } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top bg-primary bg-opacity-75">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <SiNextdotjs style={{ color: "#fff", fontSize: "1.5em" }} />{" "}
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
                <li className="nav-item ">
                  <NavLink className="nav-link" aria-current="page" to="/" >
                    <FaHome className="text-info mb-1" /> Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sports" >
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
                  className=" mt-2 h-5"
                  style={{
                    backgroundColor: " rgb(3 7 18)",
                    borderRadius: "20px",
                    padding: "0 9px",
                    marginLeft:"8px",
                    marginBottom:"2px"
                  }}
                >
                  <FaSun style={{color:"yellow"}} size={17} />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
