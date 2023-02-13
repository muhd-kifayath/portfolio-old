import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {

    return (
        <>
            <section id='about'>
                <div className='container about-page'>
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters
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
                </div>
            </section>
        </>
    )
}

export default About