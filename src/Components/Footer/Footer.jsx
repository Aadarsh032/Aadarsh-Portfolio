import React from 'react'
import './Footer.css'
import logo from '../../assets/aadarsh-logo.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I enhance websites with cutting-edge designs to elevate their aesthetic and functional appeal.</p>
            </div>
         </div>
         <hr />
        <div className='footer-bottom'>
                   <div className='footer-bottom-left'>
                       <p> © 2024 Aadarsh Kumar.All Rights Reseved</p>
                   </div>
                   <div className='footer-bottom-right'>
                       <p>Terms of Service</p>
                       <p>Privacy Policy</p>
                       <p>Connect with Me</p>
                   </div>
            </div>

    </div>
  )
}

export default Footer