import { Fade } from "react-reveal"


const Skills = () => {
    return (
        <>
            <section className="skills">
                <div className="menu_skills">
                  
                        <div className="left_skills">
                            <div className="menu__skills_item">
                                <i className="fa-brands fa-html5" style={{ color: '#F58200' }}></i>
                                <Fade left cascade className="skills__item_title">HTML5</Fade>
                                <div className="border"></div>
                            </div>
                            <div className="menu__skills_item">
                                <i className="fa-brands fa-css3-alt" style={{ color: '#007AF5' }}></i>
                                <Fade left cascade className="skills__item_title">CSS3</Fade>
                                <div className="border"></div>
                            </div>
                            <div className="menu__skills_item">
                                <i className="fa-brands fa-square-js" style={{ color: 'yellow' }}></i>
                                <Fade left cascade className="skills__item_title" >JavaScript</Fade>
                                <div className="border"></div>
                            </div>
                            <div className="menu__skills_item">
                                <i className="fa-brands fa-react" style={{ color: 'aqua' }}></i>
                                <Fade left cascade className="skills__item_title">React js</Fade>
                                <div className="border"></div>
                            </div>
                            <div className="menu__skills_item">
                                <i className="fa-brands fa-wordpress" style={{ color: '#5F97D0' }}></i>
                                <Fade left cascade className="skills__item_title">WordPress</Fade>
                                <div className="border"></div>
                            </div>
                            <div className="menu__skills_item">
                                <i className="fa-solid fa-database" style={{ color: '#8a8c8c' }}></i>
                                <Fade left cascade className="skills__item_title">MySql</Fade>
                                <div className="border"></div>
                            </div>
                        </div>
                    

                    <div className="right_skilss">
                        <div className="menu__skills_item">
                            <i className="fa-brands fa-python" style={{ color: '#FFF' }}></i>
                            <Fade right cascade className="skills__item_title">Python</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <i className="fa-brands fa-php"></i>
                            <Fade right cascade className="skills__item_title">PHP</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <svg fill="none" height="70" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512" /><rect fill="#3178c6" height="512" rx="50" width="512" /><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd" /></svg>
                            <Fade right cascade className="skills__item_title">TypeScript</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <i className="fa-solid fa-database" style={{ color: '#8a8c8c' }}></i>
                            <Fade right cascade className="skills__item_title">SQlite</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <i className="fab fa-gulp" style={{ color: 'red' }}></i>
                            <Fade right cascade className="skills__item_title">Gulp</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item" >
                            <i className="fab fa-bootstrap" ></i>
                            <Fade right cascade className="skills__item_title">Bootstrap</Fade>
                            <div className="border"></div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}


export default Skills