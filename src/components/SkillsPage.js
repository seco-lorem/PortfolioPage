import '../stylesheets/Pages.css';
import '../stylesheets/Header.css';
import data from '../pageContents';
import React, { useState, useRef} from 'react';

const skills = data.skills;
const explanation = data.skillsExplanation;

function SkillsPage() {
/*
    const [btnClassName, setBtnClassName] = useState("");

    const indexRef = useRef(window.innerHeight);
    indexRef.current = window.innerHeight;
    const a = () => {
        console.log(indexRef.current);
        if (indexRef.current < 800) {
            setBtnClassName("small skill");
        }
        else {
            setBtnClassName("skill");
        }
    }
    window.onresize = a;
    console.log("Rerender");*/
    return (
        <div>
            <h1> Skills </h1>
            <p>{explanation}</p>
            <div className="center" >
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
        </div>
    );
}
/*

    

*/
export default SkillsPage;
