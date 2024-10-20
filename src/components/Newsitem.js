import React, { Component } from "react";
import removeImage from "./removeImage.png";
import ThemeContext from '../context/ThemeContext'; 

export default class NewsItem extends Component {
  static contextType = ThemeContext; 

  render() {
    const { isDarkMode } = this.context; 
    const { title, description, imageurl, newsurl } = this.props;

    return (
      <div 
        className="card my-4" 
        style={{
          width: "18rem", 
          boxShadow: isDarkMode ? '0 0 20px rgba(255, 255, 255, 0.4)' : '0 0 20px rgba(0, 0, 0, 0.4)', 
          backgroundColor: isDarkMode ? '#333' : '#fff', 
          color: isDarkMode ? '#fff' : '#000'
        }}
      >
        <span className="position-absolute bg-danger bg-opacity-75 text-light rounded-2 py-0.5 px-2" 
          style={{
            top: "-10px",
            left: "-12px",
          }}
        >
          New
        </span>
        <img
          src={!imageurl ? removeImage : imageurl}
          className="card-img-top"
          alt="News Thumbnail"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title === "[Removed]" ? "News Title Deleted" : title}
          </h5>
          <p className="card-text">
            {description === "[Removed]" ? "News Description Deleted" : description}
          </p>
          <a
            href={newsurl}
            style={{
              cursor: newsurl === "https://removed.com" ? "not-allowed" : "pointer",
            }}
            rel="noreferrer"
            target="_blank"
            className={`btn btn-sm ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
