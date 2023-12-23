import React from 'react'
import "../stylesheets/Work.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from "../assets/data.json"

const Work = () => {

  const op1 = {
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    nav:false,
    dots:false,
    margin:5,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:1
      },
      1200:{
        items:1
      }
    }
  }

  return (
    <div id='work'>
      <h2>Work</h2>
      <section>
        <article>
          <OwlCarousel className='owl-theme' {...op1}>
           {data.projects.map((item)=>(
             <div className="item workItem">
             <img src={item.imageSrc} alt={item.title} />
             <aside>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a target={"_blank"} href={item.url}>Viw Demo</a>
             </aside>
           </div>
           ))}
          </OwlCarousel>
        </article>
      </section>
    </div>
  )
}

export default Work