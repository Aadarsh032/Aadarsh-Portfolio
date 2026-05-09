import React, { useRef, useState } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.png'
import location_icon from '../../assets/location_icon.gif'
import medium_icon from '../../assets/medium_icon.svg'
import linkdin_icon from '../../assets/linkdin_icon.svg'
import github_icon from '../../assets/github_icon.svg'
import leetcode_icon from '../../assets/leetcode_icon.png'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_hhezjke'   // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = 'template_0mbdhm9'  // Email Templates → Template ID
const EMAILJS_PUBLIC_KEY  = '_uu0Dr8wjvoFxId2A'   // Account → Public Key
// ────────────────────────────────────────────────

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

const detailVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}

const detailItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

// ── Toast component ──────────────────────────────────────
const Toast = ({ type, onClose }) => {
  const isSuccess = type === 'success'

  return (
    <motion.div
      className={`toast toast-${type}`}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <span className='toast-icon'>{isSuccess ? '✓' : '✕'}</span>
      <div className='toast-text'>
        <p className='toast-title'>{isSuccess ? 'Message Sent!' : 'Failed to Send'}</p>
        <p className='toast-sub'>
          {isSuccess
            ? "Thanks! I'll get back to you soon."
            : 'Something went wrong. Please try again.'}
        </p>
      </div>
      <button className='toast-close' onClick={onClose}>×</button>
      {/* Progress bar that drains over 4s */}
      <motion.div
        className='toast-progress'
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 4, ease: 'linear' }}
      />
    </motion.div>
  )
}
// ────────────────────────────────────────────────────────

const Contact = () => {
  const formRef    = useRef(null)
  const sectionRef = useRef(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-100px' })

  const [status, setStatus]   = useState('idle')  // 'idle' | 'sending' | 'success' | 'error'
  const [toast, setToast]     = useState(null)     // null | 'success' | 'error'

  const showToast = (type) => {
    setToast(type)
    setTimeout(() => setToast(null), 4000)
  }

  async function Submitform(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('idle')
      formRef.current.reset()
      showToast('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('idle')
      showToast('error')
    }
  }

  return (
    <div className='contact' id='Contact' ref={sectionRef}>

      {/* ── Toast portal ── */}
      <AnimatePresence>
        {toast && (
          <Toast type={toast} onClose={() => setToast(null)} />
        )}
      </AnimatePresence>

      <motion.div
        className='contact-title'
        variants={titleVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
      >
        <h1>Get in Touch</h1>
        <div className='contact-title-underline' />
      </motion.div>

      <div className='contact-section'>

        {/* Left */}
        <motion.div
          className='contact-left'
          variants={fadeLeft}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <h1>Let's Connect</h1>
          <p>You can reach out to me or explore my portfolio through the following links.</p>

          <motion.div
            className='contact-details'
            variants={detailVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div className='contact-detail' variants={detailItem}>
              <img src={mail_icon} alt='' />
              <p>kumarn206@gmail.com</p>
            </motion.div>

            <motion.div className='contact-detail' variants={detailItem}>
              <a href='https://medium.com/@kumarn206' target='_blank' rel='noreferrer'>
                <img src={medium_icon} alt='' style={{ backgroundColor: 'white' }} />
                <p>Medium</p>
              </a>
            </motion.div>

            <motion.div className='contact-detail' variants={detailItem}>
              <a href='https://leetcode.com/u/Aadarsh032/' target='_blank' rel='noreferrer'>
                <img src={leetcode_icon} alt='' />
                <p>LeetCode</p>
              </a>
            </motion.div>

            <motion.div className='contact-detail' variants={detailItem}>
              <a href='https://www.linkedin.com/in/aadarsh-kumar-091830244/' target='_blank' rel='noreferrer'>
                <img src={linkdin_icon} alt='' />
                <p>Linkedin</p>
              </a>
            </motion.div>

            <motion.div className='contact-detail' variants={detailItem}>
              <a href='https://github.com/Aadarsh032' target='_blank' rel='noreferrer'>
                <img src={github_icon} alt='' />
                <p>Github</p>
              </a>
            </motion.div>

            <motion.div className='contact-detail' variants={detailItem}>
              <img src={location_icon} alt='' style={{ borderRadius: '50%' }} />
              <p>Chennai, TamilNadu</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          ref={formRef}
          className='contact-right'
          onSubmit={Submitform}
          variants={fadeRight}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <label>Your Name</label>
          <input type='text' placeholder='Enter your Name' name='name' required />

          <label>Your Email</label>
          <input type='email' placeholder='Enter your Email' name='email' required />

          <label>Write your Message Here</label>
          <textarea name='message' rows='8' placeholder='Enter your Message' required />

          <motion.button
            type='submit'
            className='contact-submit'
            disabled={status === 'sending'}
            whileHover={status !== 'sending' ? { scale: 1.08, boxShadow: '0 0 24px rgba(180,21,255,0.5)' } : {}}
            whileTap={status !== 'sending' ? { scale: 0.96 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            {status === 'sending' ? 'Sending…' : 'Submit Now'}
          </motion.button>
        </motion.form>

      </div>
    </div>
  )
}

export default Contact
