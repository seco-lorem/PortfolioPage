import '../stylesheets/Pages.css';
import '../stylesheets/Header.css';
import data from '../pageContents';


const skills = data.skills;
const explanation = data.skillsExplanation;

function SkillsPage() {
    return (
        <div>
            <h1> Skills </h1>
            <p>{explanation}</p>
            {skills.map((skill) => {
                return (
                    <div className="skill">
                        <button className="skill-title box"> {skill.name}</button>
                        <div className="skill-detail">
                            {skill.explanation}
                            <div/>
                            {skill.examples.map((example) => {
                                return(
                                    <a className="link box" target="_blank" href={example.link}>{example.title}</a>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
/*

    

*/
export default SkillsPage;
