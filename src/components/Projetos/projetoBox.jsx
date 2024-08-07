import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import "./projeto.css";

const ProjetoBox = ({projetoFoto, projetoNome}) => {
    const desc = {
        MarketListDesc:
        "Projeto simples feito para mobile utilizando o Expo + Javascript com os frameworks Reactjs e React-Native e estilizado com Styled-Component, imaginando uma lista de supermercado. Adicionando itens existentes em um supermercado à lista. Projeto feito para treinamento pessoal apenas para visualizar minhas habilidade no Front - End.",
        MarketListGithub: "https://github.com/FahCosta12/market-list-app.git",

        CounterDesc:
        "Componente bem amador kkk. Feito para mobile utilizando o Expo + Javascript com os frameworks Reactjs e React-Native e estilizado com Styled-Component, imaginando um contator que ao clicar no botão (+) ou (-) incrementa ou decrementa em ordem sequêncial os números decimais. Projeto feito para treinamento pessoal apenas para visualiazar minhas habilidades no Front - End.",
        CounterGithub: "https://github.com/FahCosta12/Counter.git",

        DoceBrigadeiroDesc:
        "Projeto feito com a ideia de desenvolver um app mobile para uma suposta loja de doces. Que contem as telas para o usuario realizar seu cadastro (SignUp), faça o seu login caso ja tenha uma conta cadastrada (SignIn) e uma Esqueci minha senha (Forgot Password) que ao clicar no botão Forgot Password, encaminha para a tela aonde o usuario inseri seu e-mail para criar uma nova senha. Foi feito utilizando Expo + Typescript e Javascript com os frameworks Reactjs e React-Native e estilizado com Styled-Component. Projeto feito para treinamento pessoal apenas para visualizar minhas habilidade no Front - End.",
        DoceBrigadeiroGithub: "https://github.com/FahCosta12/doce-brigadeiro-mobile.git",

    };
    return(
        <section className="projetoBox">
            {/* <img className="projetoFoto" src={projetoFoto} alt="Projeto display" /> */}
            <section> 
                <br />
                <h3>{projetoNome}</h3>
                <br />
                {desc[projetoNome + "Desc"]}
                <br />

                <a href={desc[projetoNome + "Github"]} target="_blank" rel="noreferrer">
                    <button className="btnProjeto">
                        <FaGithub/> GitHub
                    </button>
                </a>

                <a href={desc[projetoNome + "Website"]} target="_blank" rel="noreferrer">
                    <button className="btnProjeto">
                        <CgFileDocument/> Site
                    </button>
                </a>
            </section>
        </section>
    );
};

export default ProjetoBox;