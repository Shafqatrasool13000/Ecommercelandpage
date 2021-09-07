import React,{useState} from 'react'
import {
  NavLink
} from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fw-bold">
        <div className="container-fluid">
          <NavLink to="/">
            <img className="logo w-25 " src="./images/logodraz.png" alt="Draz" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" onClick={()=>setShow(!show)}></span>
          </button>
          <div className={`collapse navbar-collapse ${show?'show':''}`} >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li> <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
             
            </ul>
            <div className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-danger" type="submit">Search</button>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar