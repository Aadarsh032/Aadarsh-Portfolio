import React, { useRef } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.png'
import location_icon from '../../assets/location_icon.gif'
import medium_icon from '../../assets/medium_icon.svg'
import linkdin_icon from'../../assets/linkdin_icon.svg'
import github_icon from'../../assets/github_icon.svg'
import leetcode_icon from'../../assets/leetcode_icon.png'

const Contact = () => {

    const name =useRef('');
    const email =useRef('');
    const message =useRef('');

    
    function Submitform(event) 
    {    
      event.preventDefault();

        const contactformname = name.current.value;
        const contactformemail = email.current.value;
        const contactformmessage = message.current.value;


      Email.send({
        SecureToken : "dadf3d1f-20c1-4d43-9004-d122102bff50",
        To : 'kumarn206@gmail.com',
        From : "info@orangecom.xyz",
        Subject : "Contact Inquiry From Resume Website",
         Body : "Name : "+contactformname
        + "<br> Client's Email  : "+contactformemail
        + "<br> Message : "+contactformmessage
    }).then(
       alert("Message Sent Successfully"),
       window.location.reload()
    
    );    
    window.location.reload(); 
      };

  return (
    <div className='contact'  id='Contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                 <h1>Let's Connect</h1>
                 <p>You can reach out to me or explore my portfolio through the following links.</p>
                <div className='contact-details'>
                    <div className="contact-detail">
                       <img src={mail_icon} alt="" /> <p>kumarn206@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                       <a href="https://medium.com/@kumarn206" target="_blank"> <img src={medium_icon} alt=""  style={ {backgroundColor:'white'}} /> <p>Medium</p></a>
                    </div>
                    <div className="contact-detail">
                       <a href="https://leetcode.com/u/Aadarsh032/" target="_blank"> <img src={leetcode_icon} alt="" /> <p>LeetCode</p></a>
                    </div>
                    <div className="contact-detail">
                       <a href="https://www.linkedin.com/in/aadarsh-kumar-091830244/" target="_blank"> <img src={linkdin_icon} alt="" /> <p>Linkedin</p></a>
                    </div>
                    <div className="contact-detail">
                       <a href="https://github.com/Aadarsh032" target="_blank"> <img src={github_icon} alt="" /> <p>Github</p></a>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" style={ {borderRadius:'50%'}}/> <p>Bengaluru, Karnataka</p>
                    </div>
                </div>
            </div>
            <form  action="" className='contact-right' onSubmit={Submitform}>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name' name="name" ref={name}/>
                <label htmlFor="">Your Email</label>
                <input type="email"  placeholder='Enter your Email' name='email' ref={email}/>
                <label htmlFor="">Write your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter your Message' ref={message}></textarea>
                <button type='submit' className='contact-submit' onClick={Submitform}>Submit Now</button>
            </form>
            
            
        </div>
    </div>
  )
}

export default Contact
