import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"onClick={() => setActiveNav('#')}className={activeNav == '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about"onClick={() => setActiveNav('#about')} className={activeNav == '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav == '#experience' ? 'active' : ''}><AiOutlineBook/></a>
      <a href="#certifications"onClick={() => setActiveNav('#certifications')} className={activeNav == '#certifications' ? 'active' : ''}><AiFillSafetyCertificate/></a>
      <a href="#portfolio"onClick={() => setActiveNav('#portfolio')} className={activeNav == '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}><AiFillContacts/></a>
    </nav>
  )
}

export default Nav