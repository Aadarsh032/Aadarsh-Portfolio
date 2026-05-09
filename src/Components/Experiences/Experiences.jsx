import React, { useRef } from 'react'
import './Experiences.css'
import experience_data from '../../assets/experiences_data'
import { motion, useInView } from 'framer-motion'

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Experiences = () => {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <div className='experiences' id='Experiences' ref={sectionRef}>

      {/* Animated title — same pattern as Projects */}
      <motion.div
        className='experiences-title'
        variants={titleVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
      >
        <h1>Previous Experiences</h1>
        <div className='experiences-title-underline' />
      </motion.div>

      <div className='experiences-container'>
        <hr className='experiences-container-line' />

        <motion.div
          className='experiences-container-content'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          {experience_data.map((experience, index) => (
            <motion.div
              key={index}
              className='experiences-format'
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              onClick={() => experience?.link ? window.open(experience.link, '_blank') : ''}
            >
              <h1>{experience.company_name}</h1>
              <h2>{experience.designation}</h2>
              <p>{experience.date}</p>
              {experience.experience.map((achievement, i) => (
                <React.Fragment key={i}>
                  <p>{achievement}</p>
                  <br />
                </React.Fragment>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  )
}

export default Experiences
