import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoMK from '../../assets/images/logo-mk.png'
import LogoSub from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoMK} alt="logo" />
                <img className="sub-logo" src={LogoSub} alt="Muhd Kifayath" /> 
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/" >
                    <FontAwesomeIcon icon={faHome} color="#ffffff" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                    <FontAwesomeIcon icon={faUser} color="#ffffff" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                    <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
                </NavLink>
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

export default Sidebar