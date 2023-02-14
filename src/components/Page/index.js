import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import './index.scss'
import Home from '../Home'
import About from '../About'
import Layout from '../Layout'
import Loader from 'react-loaders'


const Page = () => {

    return (
        <>
            <div className='page'>
                <Layout className='layout-sidebar' />
                <div class="main-content">
                    <Home />
                    <About path='/about' />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Page