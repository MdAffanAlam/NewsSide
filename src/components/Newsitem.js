import React, { Component } from "react";
import removeImage from "./removeImage.png";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className="card my-4" style={{ width: "18rem", boxShadow:' 0 0 20px rgba(0, 0, 0, 0.4)', }}>
        <span className="position-absolute bg-danger bg-opacity-75 text-light rounded-2 py-0.5 px-2" style={{
          top:"-10px",
          left:"-12px",
        }}>New</span>
        <img
          src={!imageurl ? removeImage : imageurl}
          className="card-img-top"
          alt="/"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title === "[Removed]" ? "News Title Deleted" : title}
          </h5>
          <p className="card-text">
            {description === "[Removed]"
              ? "News Description Deleted"
              : description}
          </p>
          <a
            href={newsurl}
            style={{
              cursor:
                newsurl === "https://removed.com" ? "not-allowed" : "pointer",
            }}
            rel="noreferrer"
            target="_blank"
            className="btn btn-dark btn-sm hover:bg-blue-600"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
