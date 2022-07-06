import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <>
    <div className="container">
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" id="nav-brand"><i id="fa-brain"className='fas fa-brain'></i>Healthy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i className="fa fa-angle-double-down">Menu</i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Quiz">Quiz</Link>
        </li>
      </ul>
      <span className="navbar-text">
        <Link to="/Quiz">Take Mental Health Test</Link>
      </span>
    </div>
  </div>
  </nav>
    </div>
    </>
      
  )
}
