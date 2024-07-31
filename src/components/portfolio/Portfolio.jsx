import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/proj1.png';
import IMG2 from '../../assets/proj2.png';
import IMG3 from '../../assets/proj3.png';
import IMG4 from '../../assets/proj4.png';
import IMG5 from '../../assets/proj5.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Projects</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='Sorting Algorithm' />
          </div>
          <h3>Sorting Algorithm</h3>
          <p><strong>Description:</strong> An interactive tool demonstrating Bubble Sort, Selection Sort, Merge Sort, and Insertion Sort with real-time visualization.</p>
          <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Nikiurjew/sorting-algorithms' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
            <a href='https://sorting-algorithms-teal.vercel.app/' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='To-Do List' />
          </div>
          <h3>To-Do List</h3>
          <p><strong>Description:</strong> A task management application allowing users to add, edit, and delete tasks for enhanced productivity and organization.</p>
          <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Nikiurjew/To-Do-List' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
            <a href='https://todo-list-mu-red-48.vercel.app/' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='Book Review Website' />
          </div>
          <h3>Book Review Website</h3>
          <p><strong>Description:</strong> A platform for users to review and rate books, featuring account creation, review posting, and book rating functionalities.</p>
          <p><strong>Tech Stack:</strong> Python, SQL, HTML, CSS, JavaScript</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Nikiurjew/book_review-website' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='Car Loan EMI' />
          </div>
          <h3>Car Loan EMI</h3>
          <p><strong>Description:</strong> An Android application to compute the Equated Monthly Installment (EMI) for car loans based on user inputs.</p>
          <p><strong>Tech Stack:</strong> Java, Android, XML</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Nikiurjew/Car-Loan-Emi/tree/main' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='Grocery Management System (Mega-Mart)' />
          </div>
          <h3>Grocery Management System</h3>
          <p><strong>Description:</strong> An application to streamline grocery store operations with efficient data handling and a user-friendly interface.</p>
          <p><strong>Tech Stack:</strong> Spring Boot,Hibernate,MySQL, Angular</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Nikiurjew/Edubridge_Project' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;
