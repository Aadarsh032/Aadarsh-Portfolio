import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Aadarsh_Kumar.jpeg'

const About = () => {
  return (
    <div className='about' id='About'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className='about-right'>
              <div className="about-para">
                <p>I am a passionate Frontend Developer and Cloud Engineer  with one year of experience in the IT industry. I am driven by a love for coding and solving real-world problems through innovative applications. </p>
                <p>Specializing in frontend design, I enjoy crafting user-friendly interfaces to enhance website experiences.</p>
              </div>
              <div className="about-skills">
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Azure</p><hr style={{width:"40%"}}/></div>
                <div className="about-skill"><p>HTML &CSS</p><hr style={{width:"40%"}}/></div>    
              </div>
            </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>1+</h1>
            <p>Years of Experience</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>Projects Completed</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>2+</h1>
            <p>Happy Clients</p>
          </div>
        </div>
    </div>
  )
}

export default About