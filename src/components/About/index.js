import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faAndroid, faReact, faGitAlt, faJsSquare } from '@fortawesome/free-brands-svg-icons'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            <section id='about'>
                <div className='container about-page'>
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                                idx={15}
                            />
                        </h1>
                        <p>
                            I am a Second Year Software Engineering student at VIT Chennai with a strong passion for computer science.
                            I am highly motivated and extremely passionate about developing.
                        </p>
                        <p>
                            In this world, where nearly anything built or improved with technology, I like to keep up-to-date with latest software and always eager to learn new technologies.
                            Experienced in Web Development, App Development and Cloud Computing, I am open to widening my knowledge in different fields.
                        </p>
                        <p>
                            Open for Internships to learn and apply various technologies.
                            I am excited about the future of computer science and believe that I have a valuable contribution to make in this field.
                        </p>
                    </div>

                    <div className="stage-cube-cont">
                        <div className="cubespinner">
                            <div className="face1">
                                <FontAwesomeIcon icon={faPython} width="50%" />
                            </div>
                            <div className="face2">
                                <FontAwesomeIcon icon={faJava} width="50%" />
                            </div>
                            <div className="face3">
                                <FontAwesomeIcon icon={faAndroid} width="50%" />
                            </div>
                            <div className="face4">
                                <FontAwesomeIcon icon={faReact} width="50%" />
                            </div>
                            <div className="face5">
                                <FontAwesomeIcon icon={faJsSquare} width="50%" />
                            </div>
                            <div className="face6">
                                <FontAwesomeIcon icon={faGitAlt} width="50%" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About