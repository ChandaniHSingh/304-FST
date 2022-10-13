import React from 'react'
import {NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Poll System</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Add">Add</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ViewAll">ViewAll</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="/Login">Login</a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
      
        {/* <nav>
            <NavLink to="Home">Home</NavLink>&nbsp;&nbsp;
            <NavLink to="Add">Add</NavLink>&nbsp;&nbsp;
            <NavLink to="ViewAll">ViewAll</NavLink>&nbsp;&nbsp;
            <NavLink to="Login">Login</NavLink>&nbsp;&nbsp;
        </nav> */}
    </>
  )
}

export default Header