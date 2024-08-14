import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import "./footer.css";

const Footer = () => {
    const data = new Date();
    let ano = data.getFullYear();
    return (
        <footer>
            <h4>Copyright &copy; {ano} | Todos os Direitos Reservados.</h4>
            <section className="footerLinks">
                <a href="https://github.com/FahCosta12" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/fabricio-costa12/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>

                <a href="mailTo:fabricio_matheus@outlook.com" target="_blank" rel="noreferrer">
                    <GrMail />
                </a>
            </section>
        </footer>
    );
};

export default Footer;