import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proj1.png'
import IMG2 from '../../assets/proj2.png'
import IMG3 from '../../assets/proj3.png'
import IMG4 from '../../assets/proj4.png'
/*import IMG5 from '../../assets/proj5.png'*/
const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h2>My Projects</h2>

        <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG1} alt=''/>
          <h3>Sorting-Algorithm</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Nikiurjew/sorting-algorithms' className='btn btn-primary' target='_blank'>Github</a>
          <a href='https://sorting-algorithms-teal.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG2} alt=''/>
          <h3>To-Do-List</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Nikiurjew/To-Do-List' className='btn btn-primary' target='_blank'>Github</a>
          <a href='https://todo-list-mu-red-48.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG3} alt=''/>
          <h3>Book-Review-Website</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Nikiurjew/book_review-website' className='btn btn-primary' target='_blank'>Github</a>
          
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG4} alt=''/>
          <h3>Car-Loan-Emi</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Nikiurjew/Car-Loan-Emi/tree/main' className='btn btn-primary' target='_blank'>Github</a>
          
          </div>
        </article>

        </div>
    </section>
  )
}

export default Portfolio