import Logo from './../../components/logo/Logo'

import video from './../../video/videos.50baa1f7b2d579709a18.mp4'
import Music from '../../components/music_ico/music'
import './home.css'

import { animate, motion } from 'framer-motion'

const Home = () => {

  


    const container = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 2,
                staggerChildren: 0.3,
            }
        },
    }
    
    
    const animate = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            
            },
    }
    

    return (
        <section className="home" id="Home">
            <Logo />
            <div className="home__bg">
                <div className="title">
                    <motion.div  variants={container} initial='hidden' animate='show' className='title__item'>
                        <motion.div className='title__block'  variants={container} initial='hidden' animate='show' >
                            <motion.h1 variants={animate} className='title__text'>V </motion.h1>
                            <motion.h1 variants={animate} className='title__text'>l</motion.h1>
                            <motion.h1 variants={animate} className='title__text'>a </motion.h1>
                            <motion.h1 variants={animate} className='title__text'>d</motion.h1>
                            <motion.h1 variants={animate} className='title__text'>i</motion.h1>
                            <motion.h1 variants={animate} className='title__text'>s</motion.h1>
                            <motion.h1 variants={animate} className='title__text'>l</motion.h1>
                            <motion.h1 variants={animate} className='title__text'>a</motion.h1>
                            <motion.h1 variants={animate} className='title__text'>v&nbsp;</motion.h1 >
                            <motion.h1 variants={animate} className='title__text'>d</motion.h1>
                            <motion.h1 variants={animate} className='title__text'>e</motion.h1>
                            <motion.h1 variants={animate} className='title__text'>v</motion.h1>
                        </motion.div>
                        <motion.h3 variants={animate} className='description'> Front-End Developer </motion.h3>
                       <Music/>
                    </motion.div>
                </div>

                <video src={video} className='video' autoPlay loop></video>


            </div>


        </section>


    );



}

export default Home