import React from 'react'
import './NavigationStyles.css';

const Navigation = () => {
  return ( 
    <div>
      <div className="ui attached stackable secondary menu">
        <div className="ui container">
          <a className="item">
            About
          </a>
          <a className="item">
            Projects
          </a>
          <a className="item">
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navigation;

{/* <div className="ui bottom attached">
        <div className="ui visible left secondary vertical sidebar menu">
          <div className="navImage">
            <img className="ui medium circular image" src="/images/favicon.ico" />
          </div>

          <div>
            <h1 className="headerName">Jen Calhoon</h1>
            <p className="headerTitle">Software Engineer</p>
          </div>

          <div>
            <a className="item">
              About
            </a>
            <a className="item">
              Projects
            </a>
            <a className="item">
              Contact
            </a>
          </div>
        </div>
      </div> */}
