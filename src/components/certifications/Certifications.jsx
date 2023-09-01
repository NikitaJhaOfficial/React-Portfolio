import React from 'react'
import './certifications.css'
import CER1 from '../../assets/certi1.png'
import CER2 from '../../assets/certi2.png'
import CER3 from '../../assets/certi3.png'
import CER4 from '../../assets/certi4.png'
import CER5 from '../../assets/certi5.png'
import CER6 from '../../assets/certi6.png'

const certifications = () => {
  return (
    <section id='certifications'>
      <h2>My Certifications</h2>

      <div className='container certification__container'>
        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER1} alt=''/>
          <h3>Programming Fundamentals</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1O7izJF5jOBsjX5-jYNbK-Jg6tQVd38ZH/view?usp=drive_link' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>

        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER2} alt=''/>
          <h3>Neurals Networks and Deep Learning</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1pJS_IBZ-sBf7yivT-Vchc93dWfTZJkp5/view?usp=drive_link' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>

        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER3} alt=''/>
          <h3> Programming for Everyone in Python </h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1tAoV4yRWqSANFCjxTKnjL2bi9d_cEnYF/view?usp=drive_link' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>

        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER4} alt=''/>
          <h3>Technical support system by Google</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1frzKmtbhO-JLhoIigNcy3PvMNEA3V6zh/view?usp=drive_link' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>

        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER5} alt=''/>
          <h3>Python basic skills</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1VDLwfRy4WR-jh8RHM3dHTUNjVxyWZq66/view?usp=drive_link' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>
        
        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER6} alt=''/>
          <h3>Red Hat Certification</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/12hF1Bpf6nqT5Olees0teRhEFBswH-cT1/view?usp=drive_link' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default certifications