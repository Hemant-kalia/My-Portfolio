import React from 'react';
import './Styles/Contact.css';


function Contact() {
  return (
  
      <div className="contact">
        <div className="contact_left">
          <p>
            Contact Us
          </p>
          <h2>Get in touch for more <span className="span1">Collaborations...</span></h2>
          <form action="">
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="Your Email"/>
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact_right">
          <h2>Contact Details</h2>
          <p className="contact_lables">
            Email : <a href="mailto:hemantkumar082004@gmail.com" target="_blank" rel="noopener noreferrer">hemantkumar082004@gmail.com</a>
          </p>
          <p className="contact_lables">Phone No. : +91 9256475907</p>
          <p className="contact_lables">LinkedIn : <a href="https://www.linkedin.com/in/hemant-kumar-24756928a/" target='_blank'>Hemant's LinkedIn</a></p>
          
        </div>
        
      </div>
  
  );
}

export default Contact;