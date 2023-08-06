import React, { Component } from 'react'


export default class Navbar extends Component {
  render() {
    let {title}=this.props;
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title}
          </a>
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
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Politices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Entertanmaint
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Serials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}
