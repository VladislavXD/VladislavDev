import './about.css'
import aboutVideo from './../../video/about.mp4'
import AboutText from '../../components/about-text/aboutText';
import Skills from '../../components/about-text/aboutSkills';
import Footer from '../../components/footer/footer';
import { Fade } from "react-reveal";

const About = () => {
    return (
        <>
          
            <section className='about' >


                <div className="about__title">
                <Fade top cascade >
                    <div className="about_title_text">About</div>
                </Fade>
                </div>
                <div className="about__content">
                    <Fade left cascade>
                        <video src={aboutVideo} autoPlay loop className='about_video' muted></video>
                    </Fade>
                    <AboutText />
                </div>
            </section>
            <div className="skills">
                <div className="skills__title">
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.30' data-scroll-speed='4'>S</h1>
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.25' data-scroll-speed='4'>k</h1>
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.20' data-scroll-speed='4'>i</h1>
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.15' data-scroll-speed='4'>l</h1>
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.10' data-scroll-speed='4'>l</h1>
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.5' data-scroll-speed='4'>s</h1>
                </div>

                <Skills />
                <Footer />
            </div>

        </>

    );
}

export default About;