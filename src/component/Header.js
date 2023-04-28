import React from 'react'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
       <Link to='/'><a className="navbar-brand main-logo" href="!" target="#"> CoverMonkey</a> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to='/'> <a className="nav-link active" aria-current="page" href="!" target="#">Home</a></Link>
            </li>
            <li className="nav-item">
              
            <Link to='/aboutus'> <a className="nav-link" href="!" target="#">About Us</a></Link>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
