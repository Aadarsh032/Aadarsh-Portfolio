import React, { useRef } from 'react'
import './About.css'
import profile_img from '../../assets/Aadarsh_Kumar.jpeg'
import { motion, useInView } from 'framer-motion'

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const skillsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const skillItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const achievementsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const achievementItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const About = () => {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <div className='about' id='About' ref={sectionRef}>

      {/* Title */}
      <motion.div
        className='about-title'
        variants={titleVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
      >
        <h1>About Me</h1>
        <div className='about-title-underline' />
      </motion.div>

      <div className='about-sections'>

        {/* Left — profile image */}
        <motion.div
          className='about-left'
          variants={fadeLeft}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <img src={profile_img} alt='Aadarsh Kumar' />
        </motion.div>

        {/* Right — para + skills */}
        <motion.div
          className='about-right'
          variants={fadeRight}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className='about-para'>
            <p>Full Stack Developer with 2.8 years of experience in front-end and back-end technologies. I also bring expertise in Azure cloud technology from my time as a Cloud Engineer. As a former freelance developer, I deliver creative and customized solutions for diverse client needs.</p>
          </div>

          <motion.div
            className='about-skills'
            variants={skillsContainer}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
          >
            {[
              { label: 'JavaScript', width: '60%' },
              { label: 'React Js',   width: '70%' },
              { label: 'Java',       width: '60%' },
              { label: 'Azure',      width: '60%' },
              { label: 'TypeScript', width: '60%' },
              { label: 'Express Js', width: '40%' },
              { label: 'HTML & CSS', width: '80%' },
            ].map(({ label, width }) => (
              <motion.div className='about-skill' key={label} variants={skillItem}>
                <p>{label}</p>
                <hr style={{ width }} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div
        className='about-achievements'
        variants={achievementsContainer}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className='about-achievement' variants={achievementItem}>
          <h1>2.8+</h1>
          <p>Years of Experience</p>
        </motion.div>
        <hr />
        <motion.div className='about-achievement' variants={achievementItem}>
          <h1>12+</h1>
          <p>Projects Completed</p>
        </motion.div>
        <hr />
        <motion.div className='about-achievement' variants={achievementItem}>
          <h1>2+</h1>
          <p>Impactful Projects</p>
        </motion.div>
      </motion.div>

    </div>
  )
}

export default About
