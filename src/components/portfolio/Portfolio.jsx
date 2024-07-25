// import React from 'react'
// import './portfolio.css'
// import IMG1 from '../../assets/proj1.png'
// import IMG2 from '../../assets/proj2.png'
// import IMG3 from '../../assets/proj3.png'
// import IMG4 from '../../assets/proj4.png'
// /*import IMG5 from '../../assets/proj5.png'*/
// const Portfolio = () => {
//   return (
//     <section id='portfolio'>
//         <h2>My Projects</h2>

//         <div className='container portfolio__container'>
//         <article className='portfolio__item'>
//           <div className='portfolio__item-image'></div>
//           <img src={IMG1} alt=''/>
//           <h3>Sorting-Algorithm</h3>
//           <div className='portfolio__item-cta'>
//           <a href='https://github.com/Nikiurjew/sorting-algorithms' className='btn btn-primary' target='_blank'>Github</a>
//           <a href='https://sorting-algorithms-teal.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className='portfolio__item'>
//           <div className='portfolio__item-image'></div>
//           <img src={IMG2} alt=''/>
//           <h3>To-Do-List</h3>
//           <div className='portfolio__item-cta'>
//           <a href='https://github.com/Nikiurjew/To-Do-List' className='btn btn-primary' target='_blank'>Github</a>
//           <a href='https://todo-list-mu-red-48.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className='portfolio__item'>
//           <div className='portfolio__item-image'></div>
//           <img src={IMG3} alt=''/>
//           <h3>Book-Review-Website</h3>
//           <div className='portfolio__item-cta'>
//           <a href='https://github.com/Nikiurjew/book_review-website' className='btn btn-primary' target='_blank'>Github</a>
          
//           </div>
//         </article>

//         <article className='portfolio__item'>
//           <div className='portfolio__item-image'></div>
//           <img src={IMG4} alt=''/>
//           <h3>Car-Loan-Emi</h3>
//           <div className='portfolio__item-cta'>
//           <a href='https://github.com/Nikiurjew/Car-Loan-Emi/tree/main' className='btn btn-primary' target='_blank'>Github</a>
          
//           </div>
//         </article>

//         </div>
//     </section>
//   )
// }

// export default Portfolio
import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/proj1.png';
import IMG2 from '../../assets/proj2.png';
import IMG3 from '../../assets/proj3.png';
import IMG4 from '../../assets/proj4.png';
import IMG5 from '../../assets/proj5.jpg';
/*import IMG5 from '../../assets/proj5.png'*/

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Projects</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG1} alt='Sorting Algorithm'/>
          <h3>Sorting Algorithm</h3>
          <p>The Sorting Algorithms Visualization project provides an interactive tool to demonstrate how various sorting algorithms work, including Bubble Sort, Selection Sort, Merge Sort, and Insertion Sort. Built using HTML, CSS, and JavaScript, it allows users to see each step of the sorting process in real-time, enhancing understanding of algorithmic concepts through visual learning.</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Nikiurjew/sorting-algorithms' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
            <a href='https://sorting-algorithms-teal.vercel.app/' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG2} alt='To-Do List'/>
          <h3>To-Do List</h3>
          <p>The TODO List project is a simple and efficient application designed to help users manage their tasks effectively. Built using html,css javascript, it features a user-friendly interface that allows users to add, edit, and delete tasks. The application ensures tasks are organized and easily accessible, enhancing productivity and task management.</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Nikiurjew/To-Do-List' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
            <a href='https://todo-list-mu-red-48.vercel.app/' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG3} alt='Book Review Website'/>
          <h3>Book Review Website</h3>
          <p>The Book Review Website project is a comprehensive platform for users to review and rate books. Built using Python and SQL for the backend, and HTML, CSS, and JavaScript for the frontend, this application allows users to create accounts, post reviews, and rate books. It features a user-friendly interface for browsing and searching for books, as well as a robust backend to manage user data and book information, ensuring a seamless and engaging user experience.</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Nikiurjew/book_review-website' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG4} alt='Car Loan EMI'/>
          <h3>Car Loan EMI</h3>
          <p>Developed a user-friendly Android application that computes the Equated Monthly Installment (EMI) for car loans. The app allows users to input the car cost, interest rate, and loan tenure (in months and years) to determine the monthly payment required. This project showcases expertise in Android development, user interface design, and financial calculations.</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Nikiurjew/Car-Loan-Emi/tree/main' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG5} alt='Grocery-Management'/>
          <h3>Grocery Management System(Mega-Mart)</h3>
          <p>The Grocery Management System is a comprehensive application that streamlines grocery store operations. It uses MySQL for efficient database management, Spring Boot for robust back-end services, and Angular for an interactive and responsive front-end interface. This integrated approach ensures smooth data handling, secure operations, and a user-friendly experience.</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Nikiurjew/Edubridge_Project' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
            
          </div>
        </article>

        

      </div>
    </section>
  )
}

export default Portfolio;