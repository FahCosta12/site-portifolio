import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
    const data = new Date();
    let ano = data.getFullYear();
    return (
        <footer>
            <h4>Copyright &copy; {ano} | Todos os Direitos Reservados.</h4>
            <div>
                <a href="https://github.com/FahCosta12" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/fabricio.costa98" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>

                <a href="mailTo:fabricio_matheus@outlook.com" target="_blank" rel="noreferrer">
                    <GrMail />
                </a>
            </div>
        </footer>
    );
};

export default Footer;