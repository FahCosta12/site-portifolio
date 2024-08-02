import React from "react";
import { DiJavascript } from "react-icons/di";
import {
    FaBootstrap,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaNode,
    FaNpm,
    FaReact
} from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import "./sobre.css";

const Skills = ({ skill }) => {
    const icon = {
        HTML: <FaHtml5 />,
        CSS: <SiCss3 />,
        Javascript: <DiJavascript />,
        Bootstrap: <FaBootstrap />,
        Nodejs: <FaNode />,
        React: <FaReact />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,
    }
    return (
        <div title={skill} className="SkillBox">
            {icon[skill]}
        </div>
    );
};

export default Skills;