import React, { useState } from 'react';
import './Styles/Contact.css';

const API_URL = 'http://localhost:8000/api/contact';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');
    setIsError(false);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        // FastAPI validation errors return detail as an array or string
        const detailMessage = Array.isArray(data.detail)
          ? data.detail.map((err) => err.msg).join(', ')
          : data.detail;
        throw new Error(detailMessage || 'Failed to send message.');
      }

      setFormData({ name: '', email: '', message: '' });
      setStatusMessage('Thank you! Your message has been sent.');
      setIsError(false);
    } catch (error) {
      setStatusMessage(error.message || 'Could not connect to the server.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact_left">
        <p>
          Contact Us
        </p>
        <h2>Get in touch for more <span className="span1">Collaborations...</span></h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {statusMessage && (
            <p style={{ color: isError ? '#dc2626' : '#16a34a', marginTop: '10px' }}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>

      <div className="contact_right">
        <h2>Contact Details</h2>
        <p className="contact_lables">
          Email : <a href="mailto:hemantkumar082004@gmail.com" target="_blank" rel="noopener noreferrer">hemantkumar082004@gmail.com</a>
        </p>
        <p className="contact_lables">Phone No. : +91 9256475907</p>
        <p className="contact_lables">LinkedIn : <a href="https://www.linkedin.com/in/hemant-kumar-24756928a/" target='_blank' rel="noopener noreferrer">Hemant's LinkedIn</a></p>
      </div>
    </div>
  );
}

export default Contact;