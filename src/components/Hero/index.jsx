import React from 'react'
import './HeroStyles.css';

const Hero = () => {
  return ( 
    <div className="ui grid">
      <div className="eight wide column leftHero">
        [insert image]
      </div>
      <div className="eight wide column rightHero">
        <h1 className="heroText">Jen Calhoon</h1>
        <p className="subHeroText">Software Engineer / Web Developer</p>
      </div>
    </div>
  );
}

export default Hero;
