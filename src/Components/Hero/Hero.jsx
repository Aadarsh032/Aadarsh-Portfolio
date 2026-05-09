import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ProfileImageAadarsh.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Hero = () => {
  const textani = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(textani.current, {
      strings: ['Product Developer.', 'Cloud Engineer.', 'Full Stack Developer.'],
      loop: true,
      typeSpeed: 90,
      backSpeed: 50,
      backDelay: 1000,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <motion.div
      className='hero'
      id='Home'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      {/* Profile image with float animation */}
      <motion.div
        className='hero-img-wrapper'
        variants={imageVariant}
        animate={{
          y: [0, -14, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <img src={profile_img} alt='Aadarsh Kumar' />
        {/* Glow ring behind image */}
        <div className='hero-img-glow' />
      </motion.div>

      {/* Main heading */}
      <motion.h1 variants={fadeUp}>I am Aadarsh Kumar a</motion.h1>

      {/* Animated typed text */}
      <motion.h1 id='animatedtext' variants={fadeUp}>
        <span ref={textani}></span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p variants={fadeUp}>
        Turning ideas into impactful digital products with full-stack expertise — currently
        building SaaS.
      </motion.p>

      {/* CTA buttons */}
      <motion.div className='hero-action' variants={fadeUp}>
        <AnchorLink href='#Contact' className='anchorlink'>
          <motion.div
            className='hero-connect'
            whileHover={{ scale: 1.06, boxShadow: '0 0 28px rgba(180,21,255,0.55)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            Connect with Me
          </motion.div>
        </AnchorLink>

        <a
          href='https://drive.google.com/file/d/118DWBlQpCW9kUTHcX-kr0UbjCxtqmOcc/view?usp=sharing'
          target='_blank'
          className='hero-resume-link'
          rel='noreferrer'
        >
          <motion.div
            className='hero-resume'
            whileHover={{ scale: 1.06, borderColor: '#B415FF', boxShadow: '0 0 20px rgba(180,21,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            My Resume
          </motion.div>
        </a>
      </motion.div>

    </motion.div>
  )
}

export default Hero
