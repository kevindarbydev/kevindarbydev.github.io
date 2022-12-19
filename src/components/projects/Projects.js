import React from 'react'
import './Projects.css'
import blogSite from '../images/blogSite.png'
import losPollos from '../images/losPollos.png'
import promoPage from '../images/promoPage.png'
import TicketBlaster from '../images/ticketbl.png'

export const Projects = () => {
  return (
    <>
      <h2 id="project-header">Examples of my work (Under construction)</h2>
      <div id="projects">
        <figure>
          <img
            className="project-imgs"
            src={blogSite}
            alt="built with Laravel MVC framework"
          />
          <figcaption>Blogsite built with Laravel</figcaption>
        </figure>
        <figure>
          <a href="https://clever-hotteok-f60642.netlify.app">
            <img
              className="project-imgs"
              src={TicketBlaster}
              alt="Homepage of our Ticketmaster clone"
            />
            <figcaption>
              Full Stack (MERN) project, clone of TicketMaster
            </figcaption>
          </a>
        </figure>
        <figure>
          <img
            className="project-imgs"
            src={losPollos}
            alt="Restaurant website for Breaking Bad restaurant 'los pollos hermanos'. "
          />

          <figcaption>
            Mock website for 'Los Pollos Hermanos' restaurant
          </figcaption>
        </figure>
        <figure>
          <img
            className="project-imgs"
            src={promoPage}
            alt="Another page from los pollos website"
          />
          <figcaption>
            Mock website for 'Los Pollos Hermanos' restaurant
          </figcaption>
        </figure>
      </div>
    </>
  );
}
export default Projects;
