import React from 'react'
import './ContactStyles.css';

const Contact = () => {
  return ( 
    <div className="ui center aligned segment">
      <h1>Contact</h1>
      <div className="ui grid">
        <div className="eight wide column">
          This side would have text
        </div>
        <div className="eight wide column">
          This side has some contact info
        </div>
      </div>
    </div>
  )
}

export default Contact;
