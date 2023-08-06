import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description,imageurl,newsurl } = this.props;
    return (
      <div>
        <div className="card my-2" style={{ width: "18rem" }}>
          <img
            src={!imageurl?"headlines.jpg":imageurl}
            className="card-img-top"
            alt="/"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} rel="noreferrer"  target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
       
      </div>
    );
  }
}
