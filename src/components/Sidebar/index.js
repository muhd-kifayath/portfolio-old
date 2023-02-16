import React from 'react'
import { useState } from 'react'
import './index.scss'
import LogoMK from '../../assets/images/logo-mk.png'
import LogoSub from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <div className="nav-bar">
            <a className="logo" to="/">
                <img src={LogoMK} alt="logo" />
                <img className="sub-logo" src={LogoSub} alt="Muhd Kifayath" />
            </a>
            <nav>
                <a onClick={() => setActiveNav('#')} classname={activeNav === '#' ? 'active' : ''} href="#home" >
                    <FontAwesomeIcon icon={faHome} color="#ffffff" />
                </a>
                <a href="#about" onClick={() => setActiveNav('#about')} id="about-link" classname={activeNav === '#about' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faUser} color="#ffffff" />
                </a>
                <a onClick={() => setActiveNav('#contact')} id="contact-link" className={activeNav === '#contact' ? 'active' : ''} href="#contact" >
                    <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
                </a>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/muhd-kifayath">
                        <FontAwesomeIcon icon={faLinkedin} color='#fffff' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/muhd-kifayath">
                        <FontAwesomeIcon icon={faGithub} color='#fffff' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/muhdkifayath">
                        <FontAwesomeIcon icon={faInstagram} color='#fffff' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/muhdkifayath">
                        <FontAwesomeIcon icon={faTwitter} color='#fffff' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar