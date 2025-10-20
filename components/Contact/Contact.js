import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_icon from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send Us a message <img src={msg_icon} alt='' /></h3>
            <p>
                Feel free to reach out through contact from or find our contact information below. Your feedback, questions, and suggestions are important to us as 
                we strive to provide exceptional service to our university community.
            </p>
            <ul>
                <li><img src={mail_icon} alt='' />Contact@boody.dev</li>
                <li><img src={phone_icon} alt='' />01090984738</li>
                <li><img src={location_icon} alt='' />street 15 , New Damietta<br /> Damietta, Egypt</li>
            </ul>
        </div>
        <div className='contact-col'>   
            <form>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Your Phone Number' required />
                <label>Write Your Message here</label>
                <textarea name='message' rows={6} placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now<img src={white_icon} alt='' /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact