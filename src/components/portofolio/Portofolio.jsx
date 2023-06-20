import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.PNG'
import IMG2 from '../../assets/paxontools.PNG'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Meteo App',
    github: 'https://github.com/peterondy/meteo-app-react',
    demo: 'https://meteo-react-app.onrender.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Paxon Tools',
    github: 'https://github.com/peterondy/paxontools.github.io',
    demo: 'https://paxontools.onrender.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'ChatCord App',
    github: 'https://github.com/peterondy/chatcord',
    demo: 'https://chatcord-ramziben.onrender.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Ecommerce Platform',
    github: 'https://github.com/peterondy/e-commerce.github.io/',
    demo: 'https://github.com/peterondy/e-commerce.github.io/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'OAcademy Platform',
    github: 'https://github.com/peterondy/OAcademy.github.io/',
    demo: 'https://github.com/peterondy/OAcademy.github.io/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'WordPress Development',
    github: 'https://github.com',
    demo: 'htpps://github.com'
  },
]
const Portofolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article id={id} className="portofolio__item">
                <div className="portofolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portofolio__item-cta">
                  <a href={github} className="btn" target='__blank'>Github</a>
                  <a href={demo} className="btn btn-primary" target='__blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio
