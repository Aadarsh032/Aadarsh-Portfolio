import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ProfileImageAadarsh.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import Typed from 'typed.js';

const Hero = () => {

  const textani = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(textani.current, {
      strings: ['Full Stack Developer.', 'Cloud Engineer.','Coder.'],
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
        <p>Turning ideas into impactful digital products with full-stack expertise — currently building SaaS.</p>
        <div className="hero-action">
           <AnchorLink href='#Contact' className='anchorlink'><div className="hero-connect" >Connect with Me</div></AnchorLink> 
            <a href="https://drive.google.com/file/d/1XgX5tuDdTCteT4t-dsd9EvvAQIZQYxHY/view?usp=sharing" target="_blank" className='hero-resume-link'><div className="hero-resume">My Resume</div></a>
        </div>
    </div>
  )
}

export default Hero
