import React from 'react'
import { Link,useLocation } from "react-router-dom";

export default function Header() {

  let location = useLocation();
  const pathHeder =  location.pathname;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand main-logo mx-5 " > CoverMonkey </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{marginLeft: '10px'}}>
              <Link to='/' className= {`nav-link ${(pathHeder==='/')?"active": " "}`} aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">

              <Link to='/aboutus' className= {`nav-link ${(pathHeder==='/aboutus')?"active": " "}`} >About Us</Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
