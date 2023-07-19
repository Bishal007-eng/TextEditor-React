import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >
        <div className="logo">
          <a className="navbar-brand" href="/">{props.title}</a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/learnMore">Learn More</a>
            </li>


          </ul>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success mx-1" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.mode==='light' ? '#00187e' : 'light'}`}>
            <input className="form-check-input me-auto my-2" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckChecked" />
            <label className="form-check-label my-1" htmlFor="flexSwitchCheckChecked"> Dark Mode</label>
          </div>
          
        </div>
        
      </div> 

      
    </nav>
  )
}

//This is to tell the props about the data type to expect.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

//if props is not passed, then this will be called.
Navbar.defaultProps = {
  title: "Set title here..!"
};