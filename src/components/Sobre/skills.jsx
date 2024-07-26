import React from "react";
import { DiJavascript, DiNodejs } from "react-icons/di";
import {
    FaBootstrap,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaNpm,
    FaReact
} from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import "./sobre.css";

const Skills = ({skills}) => {
    const icon = {
        HTML: <FaHtml5/>,
        CSS: <SiCss3/>,
        Javascript: <DiJavascript/>,
        Bootstrap: <FaBootstrap/>,
        Nodejs: <DiNodejs/>,
        React: <FaReact/>,
        Git: <FaGitAlt/>,
        Github: <FaGithub/>,
        Npm: <FaNpm/>,
    }
    return (
        <div title={skills} className="SkillBox">
            {icon[skills]}
        </div>
    );
};

export default Skills;