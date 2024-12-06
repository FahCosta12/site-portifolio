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
                        Olá, meu nome é <b>Fabrício Costa</b> e atualmente resido na cidade de Amparo - SP, Brasil, tenho disponibilidade para atuar em outras localidades.
                        <br />
                        <br />
                        Concluí em 03/2024 o curso de <b>Tecnólogo em Análise e Desenvolvimento de Sistemas</b> pela Universidade Estácio de Sá, com ênfase em <b>Programação, Desenvolvimento Web Front End</b>, me identifico muito com a área e adoro criar projetos com designs atrativos e praticar tudo o que aprendi e continuo aprendendo com os projetos em andamento.
                        <br />
                        <br />
                        Atualmente estou desenvolvendo alguns trabalhos para colocar em prática e me desenvolver ainda mais na área.
                        <br />
                        <br />
                        Para visualizar um pouco do meu trabalho clique no Menu Projetos.
                        <br />
                        <br />
                        Sendo recém formado estou aberto à novas oportunidades de trabalho onde eu possa contribuir e aprender sempre.
                        <br />
                        <br />
                        Um pouco mais sobre meu perfil é que além de programar, gosto de práticar esportes como futebol e fazer academia.
                        <br />
                        <br />
                        Sinta-se à vontade para conectar comigo, os links estão no rodapé.
                        <br />
                        <br />
                        Agradeço sua atenção.
                        <br />
                        <br />
                        Abraço.
                        <br />
                        <br />
                        Fabrício Costa.
                    </p>
                    <a href="https://drive.google.com/file/d/1IMm1BqbFbsogG3CswMKwVZzifQq_MS8Z/view?usp=sharing" target="_blank" rel="noreferrer" className="resume-btn">
                        <button>
                            CV Download <FaFileDownload />
                        </button>
                    </a>
                </div>

                <div></div>
            </section>

            <h1 className="Titulo-Skills">Skillset</h1>
            <section className="skills">
                <Skills skill="HTML5" />
                <Skills skill="CSS3" />
                <Skills skill="Javascript" />
                <Skills skill="Typescript" />
                <Skills skill="React" />
                <Skills skill="Tailwind" />
                <Skills skill="ShadcnUI"/>
                <Skills skill="Nodejs" />
                <Skills skill="Npm" />
                <Skills skill="Yarn" />
                <Skills skill="Git" />
                <Skills skill="Github" />
            </section>
        </>
    );
};

export default Sobre;