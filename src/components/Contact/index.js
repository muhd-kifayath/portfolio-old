import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Instagram from '../../assets/icons/instagram.svg'
import Twitter from '../../assets/icons/twitter.svg'
import LinkedIn from '../../assets/icons/linkedin.svg'
import GitHub from '../../assets/icons/github.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            <section id="contact">
                <div className="container contact-page">
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                                idx={15}
                            />
                        </h1>
                        <p>
                            If you have any request or question, don't hesitate to reach out to me by clicking any of the social media below.
                        </p>
                        <ul>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/muhd-kifayath">
                                    <img src={LinkedIn} alt="" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://github.com/muhd-kifayath" className="github">
                                    <img src={GitHub} alt="" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://instagram.com/muhdkifayath">
                                    <img src={Instagram} alt="" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/muhdkifayath">
                                    <img src={Twitter} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact