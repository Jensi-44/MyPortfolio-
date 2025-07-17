import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_xxawvgm', // replace with your service ID
      'template_epqq6y7', // replace with your template ID
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'gmna3mw1owvdjWkp1' // replace with your public key (API key)
    ).then((result) => {
      alert(`Thank you ${form.name}, your message has been sent successfully!`);
      setForm({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error(error.text);
      alert('Something went wrong. Please try again later.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get in <span>touch</span></h2>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h3 className="lets-talk-title">
            <span className="purple">Let</span><span className="orange">'s talk</span>
          </h3>
          <p className="contact-intro">
            I'm currently available to take on new projects, so feel free to send me a message about anything you'd like to work on.
          </p>
          <div className="contact-line"><i className="fas fa-envelope"></i><span>jensikachhadiya09@gmail.com</span></div>
          <div className="contact-line"><i className="fas fa-phone-alt"></i><span>+91 97149 84003</span></div>
          <div className="contact-line"><i className="fas fa-map-marker-alt"></i><span>Gujarat, India</span></div>
        </div>

        {/* Right Side */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />

          <label>Write your message here</label>
          <textarea name="message" placeholder="Enter your message" value={form.message} onChange={handleChange} required />

          <button type="submit" className="btn-gradient submit-btn">Submit now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
