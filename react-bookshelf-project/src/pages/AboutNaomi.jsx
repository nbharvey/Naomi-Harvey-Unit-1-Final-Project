import './AboutNaomi.css'
import { Link } from 'react-router-dom'

function AboutNaomi() {

  return (
    <div className='aboutnaomi'>
      <Link to='/naomimap'>
        <img
          src="./globe2.png"
          alt="Animation of Naomi"
          className="globe-pic"
        />
      </Link>
      <article>
        <section></section>
        <h3 className='naomi-header'>👩🏽‍💻🍎 My Journey from Education to Software 🍎👩🏽‍💻 </h3>

        <p>
          I started my career in education, driven by a love for learning and
          problem-solving. Over time, I found myself increasingly drawn to the
          world of software engineering—where creativity, logic, and innovation
          collide. With support from my brother and a strong self-taught
          foundation, I made the leap into tech.
        </p>

        <h3 className='naomi-header'>🏔️🏃🏽‍♀️‍➡️ Endurance and Adventure 🚴🏽‍♀️🏔️ </h3>
        <p>
          From half marathons and triathlons to rock climbing and bike races,
          I'm constantly pushing my limits. My mission? To visit all U.S.
          national parks and summit all peaks in the USA over 14,000'. Endurance
          sports teach me focus, resilience, and adaptability—skills that
          translate beautifully into the tech world. With my background in education, I'm also passionate about creating engaging tools that help kids learn to love and protect nature—empowering the next generation to become curious, informed stewards of the environment.

        </p>
        <h3 className='naomi-header'>🌎🍃 Plans for my future career 🍃🌎 </h3>
        <p>
          As someone who thrives in the outdoors, I've experienced firsthand the
          impact of climate change on our trails, oceans, and ecosystems. As
          I've learned more about what careers are possible in tech, I've come
          to understand that software is an essential piece of the puzzle when
          it comes to scientific discoveries about our Earth. I am interesed in
          exploring software in learning about using data to support
          environmental science, marine conservation, and climate resilience. I
          see software not just as a career, but as a tool to protect the planet
          I love to explore.
        </p>
      </article>
    </div>

  )
}

export default AboutNaomi