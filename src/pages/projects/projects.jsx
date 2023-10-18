import './projects.css'
import Project from '../../components/project/project'
import { projects } from '../../helpers/projectsList'
import Footer from '../../components/footer/footer'


// Fade animate
const Projects = () => {

    return (

        <>
            
            <section className="projects" >
                <div className="project__text">
                   
                        <div className="projects__title">Projects</div>
               



                </div>
                <ul className="projects__menu">

                    {projects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                id={index + 1}
                                title={project.title}
                                content={project.content}
                                img={project.img}
                                demo={project.demo}
                            />
                        )
                    })}

                </ul>

            </section>
            <Footer />
        </>
    )
}


export default Projects