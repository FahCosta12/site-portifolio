import React from "react";
import { FaFileDownload } from "react-icons/fa";
import Skills from "./skills";
import "./sobre.css";

const Sobre = () => {
    return (
        <>
            <section className="Pagina-Sobre">
                <div className="Texto-Sobre">
                    <h1 className="Titulo-Sobre">
                        Me <b>Conheça!</b>
                    </h1>
                    <p>
                        Oi, meu nome é <b>Fabrício Costa</b> e eu sou Amparo - SP, Brasil. Sou <b>Desenvolvedor Web Front End</b> e sou formado em Análise e desenvolvimento de sistema pela Estácio <b>com ênfase em programação</b>.
                        <br />
                        Adoro criar projetos com designs atrativos e praticar tudo o que aprendi e continuo aprendendo, você pode conferir um pouco do meu trabalho na seção projetos.
                        <br />
                        <br />
                        Estou <b>aberto</b> para novas colaborações ou trabalho onde posso contribuir e crescer. Sinta-se à vontade para se conectar comigo, os links estão no rodapé.
                        <br />
                        Além de programar, gosto de jogar video-game, praticar esportes e exercícios nas horas vagas.
                    </p>
                    <a href="../../assets/Resume.pdf" download target="_blank" className="resume-btn">
                        <button>
                            Download Resume <FaFileDownload/>
                        </button>
                    </a>
                </div>

                <div></div>
            </section>

            <h1 className="Titulo-Skills">Skillset</h1>
            <section className="skills">
                <Skills skill="HTML"/>
                <Skills skill="CSS"/>
                <Skills skill="Javascript"/>
                <Skills skill="Typescript"/>
                <Skills skill="React"/>
                <Skills skill="Tailwind"/>
                <Skills skill="Bootstrap"/>
                <Skills skill="Nodejs"/>
                <Skills skill="Npm"/>
                <Skills skill="Git"/>
                <Skills skill="Github"/>
            </section>
        </>
    );
};

export default Sobre;