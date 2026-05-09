import React, { useRef, useEffect } from 'react'
import './Projects.css'
import projects from '../../assets/projects'
import { motion, useInView } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const Projects = () => {
  const scrollRef = useRef(null)
  const isHovering = useRef(false)
  const cursorX = useRef(0)
  const animFrameId = useRef(null)
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Cursor-driven auto-scroll
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      // cursorX as 0→1 across the container width
      cursorX.current = (e.clientX - rect.left) / rect.width
    }

    const handleMouseEnter = () => {
      isHovering.current = true
      startScroll()
    }

    const handleMouseLeave = () => {
      isHovering.current = false
      cancelAnimationFrame(animFrameId.current)
    }

    const startScroll = () => {
      const tick = () => {
        if (!isHovering.current) return

        const pos = cursorX.current       // 0 = left edge, 1 = right edge
        const deadzone = 0.2              // middle 20% does nothing
        const maxSpeed = 8               // px per frame

        let speed = 0
        if (pos > 0.5 + deadzone / 2) {
          // right zone
          speed = ((pos - (0.5 + deadzone / 2)) / (0.5 - deadzone / 2)) * maxSpeed
        } else if (pos < 0.5 - deadzone / 2) {
          // left zone
          speed = -((0.5 - deadzone / 2 - pos) / (0.5 - deadzone / 2)) * maxSpeed
        }

        el.scrollLeft += speed
        animFrameId.current = requestAnimationFrame(tick)
      }
      animFrameId.current = requestAnimationFrame(tick)
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animFrameId.current)
    }
  }, [])

  return (
    <div className='projects' id='Projects' ref={sectionRef}>
      <motion.div
        className='projects-title'
        variants={titleVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
      >
        <h1>My Projects</h1>
        <div className='projects-title-underline' />
      </motion.div>

      {/* Scroll hint */}
      <motion.p
        className='scroll-hint'
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Move cursor left or right to scroll →
      </motion.p>

      <motion.div
        className='project-contents'
        ref={scrollRef}
        variants={containerVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
      >
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className='project-box'
            variants={cardVariants}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
          >
            <a href={item.w_link} target='_blank' className='project-link' rel='noreferrer'>
              <div className='project-img-wrapper'>
                <img src={item.w_img} alt={item.w_name} className='project-img' />
                <div className='project-img-overlay'>
                  <span>View Project ↗</span>
                </div>
              </div>
            </a>
            <motion.h2
              className='project-name'
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            >
              {item.w_name}
            </motion.h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
