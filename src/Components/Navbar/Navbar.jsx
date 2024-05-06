import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/aadarsh-logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  
  const menuRef=useRef();
   
  const openMenu= ()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right ="-350px";
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
            <li> <AnchorLink href='#Home' className='anchorlink'>Home</AnchorLink> </li>
            <li> <AnchorLink href='#About' className='anchorlink'>About Me</AnchorLink> </li>
            <li> <AnchorLink href='#Experiences' className='anchorlink'>Experience</AnchorLink> </li>
            <li> <AnchorLink  href='#Projects' className='anchorlink'>Projects</AnchorLink> </li>
            <li> <AnchorLink  href='#Contact' className='anchorlink'>Contact</AnchorLink> </li>
        </ul>
         <AnchorLink href='#Contact' className='anchorlink'><div className="nav-connect" >Connect With Me</div></AnchorLink>  
    </div>
  )
}

export default Navbar