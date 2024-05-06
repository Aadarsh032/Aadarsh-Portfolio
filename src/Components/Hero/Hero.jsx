import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_image.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typed from 'typed.js';

const Hero = () => {

  const textani = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(textani.current, {
      strings: ['Web Developer.', 'Cloud Engineer.','Coder.'],
      loop:true,
      typeSpeed: 90,
      backSpeed:50,
      backDelay:1000
    });

    return () => {
      
      typed.destroy();
    };
  }, []);

  return (
    <div className='hero' id='Home'>
        <img src={profile_img} alt="" />
        <h1>I am Aadarsh Kumar a </h1><h1 id='animatedtext'><span ref={textani}></span></h1>
        <p>I enhance websites with cutting-edge designs to elevate their aesthetic and functional appeal.</p>
        <div className="hero-action">
           <AnchorLink href='#Contact' className='anchorlink'><div className="hero-connect" >Connect with Me</div></AnchorLink> 
            <a href="https://drive.google.com/file/d/1P5SIWSWe40Gnu3r0nKsMJiWShKMEaTaM/view?usp=sharing" target="_blank" className='hero-resume-link'><div className="hero-resume">My Resume</div></a>
        </div>
    </div>
  )
}

export default Hero