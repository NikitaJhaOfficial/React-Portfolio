import React from 'react'
import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {GrLinkedin} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ihq6qvu', 'template_j45muzq', form.current, 'VHqAT2bA7-UAyQF9g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          e.target.reset()
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdMarkEmailRead/>
          <h4>Email</h4>
          <h5>nikijha108@gmail.com</h5>
          <a href='mailto:nikijha108@gmail.com' target='_blank'>Send a message</a>
        </article>

        <article className="contact__option">
            <GrLinkedin/>
            <h4>LinkedIn</h4>
            <h5>nikita-jha-182155229/</h5>
            <a href='https://www.linkedin.com/in/nikita-jha-182155229/' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram/>
            <h4>Instagram</h4>
            <h5>n.i.k.i.t.a.j.h.a</h5>
            <a href='https://www.instagram.com/n.i.k.i.t.a.j.h.a' target='_blank'>Send a message</a>
          </article>
        </div>

        {/*       End of contact options      */}

        
       <form ref={form} onSubmit={sendEmail}>
       <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
              
       </form>
      </div>
    </section>
  )
}

export default Contact