import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import TextAnimate from '../TextAnimate'
import './index.scss'
import DP from '../../assets/images/cc.jpg'
import About from '../About'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)

    return () => clearTimeout(timeout)
  })

  const nameArray = [' ', 'K', 'i', 'f', 'a', 'y', 'a', 't', 'h']

  return (
    <>
    <section id="home">
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <p>I'm a <TextAnimate /><span id='grey'>|</span></p>
          <h2>Web Development | Android Development | Python</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="piczone">
          <div className="dp-container">
            <img src={DP} className="my-dp" />
          </div>
        </div>
      </div>
      
      </section>
    </>
  )
}

export default Home