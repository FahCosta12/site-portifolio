import React from "react";
import { DiJavascript } from "react-icons/di";
import {
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaNode,
    FaNpm,
    FaReact,
    FaYarn,
} from "react-icons/fa";
import {
    SiCss3,
    SiShadcnui,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import "./sobre.css";

const Skills = ({ skill }) => {
	const icon = {
		HTML5: {
			component: <FaHtml5 />,
			description: "HTML5",
		},
		CSS3: {
			component: <SiCss3 />,
			description: "CSS3",
		},
		Tailwind: {
			component: <SiTailwindcss />,
			description: "Tailwind",
		},
		Javascript: {
			component: <DiJavascript />,
			description: "Javascript",
		},
		Typescript: {
			component: <SiTypescript />,
			description: "Typescript",
		},
		Nodejs: {
			component: <FaNode />,
			description: "Nodejs",
		},
		React: {
			component: <FaReact />,
			description: "React",
		},
		Git: {
			component: <FaGitAlt />,
			description: "Git",
		},
		Github: {
			component: <FaGithub />,
			description: "Github",
		},
		Npm: {
			component: <FaNpm />,
			description: "Npm",
		},
		ShadcnUI: {
			component: <SiShadcnui />,
			description: "ShadcnUI",
		},
		Yarn: {
			component: <FaYarn />,
			description: "Yarn",
		},
	};

	return (
		<div title={skill} className="SkillBox">
			<div className="SkillBox-content">
				{icon[skill] && (
					<>
						{icon[skill].component}
						<p className="SkillName">{icon[skill].description}</p>
					</>
				)}
			</div>
		</div>
	);
};

export default Skills;
