import '../stylesheets/Pages.css';
import data from '../pageContents';


const projects = data.projects;
const explanation = data.projectsExplanation;

function ProjectsPage() {
    return (
        <div>
            <h1> Projects </h1>
            <p>{explanation}</p>
            {projects.map((project) => {
                return (
                    <div>
                        <hr/>
                        <p className="date box">{project.date}</p>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        {project.links.map((link) => {
                            return(
                                <a className="link box" target="_blank" href={link.link}>{link.title}</a>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectsPage;
