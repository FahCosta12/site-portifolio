import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import "./projeto.css";

const ProjetoBox = ({ projetoFoto, projetoNome }) => {
    const desc = {
        Projeto01Desc:
            "Em Desenvolvimento...",
        Projeto01Github: "https://github.com/FahCosta12/",
        Projeto01WebSite: "",

        Projeto02Desc:
            "Em Desenvolvimento...",
        Projeto02Github: "https://github.com/FahCosta12/",
        Projeto02WebSite: "",

        Projeto03Desc:
            "Em Desenvolvimento...",
        Projeto03Github: "https://github.com/FahCosta12/",
        Projeto03WebSite: "",

        Projeto04Desc:
            "Em Desenvolvimento...",
        Projeto04Github: "https://github.com/FahCosta12/",
        Projeto04WebSite: "",

        // Adicione mais projetos aqui
        // Exemplo:
        // OutroProjetoDesc: "Descrição do outro projeto",
        // OutroProjetoGithub: "https://github.com/FahCosta12/outro-projeto",
        // OutroProjetoWebsite: "https://outro-projeto.com",

    };
    return (
        <section className="projetoBox">
            <img className="projetoFoto" src={projetoFoto} alt="Projeto display" />
            <div>
                <br />
                <h3>{projetoNome}</h3>
                <br />
                {desc[projetoNome + "Desc"]}
                <br />

                <a href={desc[projetoNome + "Github"]} target="_blank" rel="noreferrer">
                    <button className="btnProjeto">
                        <FaGithub /> GitHub
                    </button>
                </a>

                <a href={desc[projetoNome + "Website"]} target="_blank" rel="noreferrer">
                    <button className="btnProjeto">
                        <CgFileDocument /> Site
                    </button>
                </a>
            </div>
        </section>
    );
};

export default ProjetoBox;