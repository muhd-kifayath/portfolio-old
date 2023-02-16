import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import './index.scss'
import Sidebar from '../Sidebar';
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Layout from '../Layout'


const Page = () => {

    return (
        <>
            <div className='page'>
                <Layout className='layout-sidebar' />
                <div class="main-content">
                    <Sidebar />
                    <Home id="home" />
                    <About id="about" />
                    <Contact id="contact" />
                </div>
            </div>
        </>
    )
}

export default Page