import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Handle projects independently and successfully in challenging and cross platform environment.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience developing high quality code, and being accountable for technical delivery of projects to specifications within the given timelines.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience in building e-commerce and enterprise software solutions.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Hands-on experience in ReactJS.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Complete work within agreed upon timeframes.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Monitor and track progress on projects.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Highly organized, detailed oriented, and responsive.</p>
             </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>App Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed Android Apps With React Native.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed With Firebase As Realtime Database.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Connected to backend via REST API using Axios.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed authentication procedure to MongoDB, Firebase and Rest API.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Redux.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Troubleshoot issues and improve front-end performance.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Understand client's needs to build apps in stipulated time/budget.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintain code and write automated tests to ensure the product is of the highest quality.</p>
             </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Gathering and evaluating user requirements, in collaboration with product managers and engineers.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing graphic user interface elements, like menus, tabs and widgets.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Build page navigation buttons and search fields.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Identify and troubleshoot UX problems.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Conduct layout adjustments based on user feedback.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Adhere to style standards on fonts, colors and images.</p>
             </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Interface Design.</p>
             </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services