import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./navBar.css";

const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } else {
            setnavbarblur(false);
        }
    }

    let showMenu = () => {
        let bar = document.getElementsByClassName("bar");
        let ham = document.getElementsByClassName("NavBarLinks");

        if (bar.length >= 3 && ham.length > 0) {
            bar[0].classList.toggle("barOne");
            bar[1].classList.toggle("barTwo");
            bar[2].classList.toggle("barThree");
            ham[0].classList.toggle("showNavbar");
        } else {
            console.error("Elementos não encontrados ou insuficientes");
        }
    };

    let hideMenu = () => {
        let bar = document.getElementsByClassName("bar");
        let ham = document.getElementsByClassName("NavBarLinks");

        if (bar.length >= 3 && ham.length > 0) {
            bar[0].classList.remove("barOne");
            bar[1].classList.remove("barTwo");
            bar[2].classList.remove("barThree");
            ham[0].classList.remove("showNavbar");
        } else {
            console.error("Elementos não encontrados ou insuficientes");
        }
    };

    return (
        <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
            <a href="/" className="Logo">
                <h1>
                &lt;Fabrício Costa/&gt;
                </h1>

            </a>


            <div className="Hamburger" onClick={showMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>


            <ul className="NavBarLinks">
                <li onClick={hideMenu}>
                    <Link to="/">
                        <AiOutlineHome /> Home
                    </Link>
                </li>
                <li onClick={hideMenu}>
                    <Link to="/Sobre">
                        <BsPerson /> Sobre
                    </Link>
                </li>
                <li onClick={hideMenu}>
                    <Link to="/Projetos">
                        <BsCodeSlash /> Projetos
                    </Link>
                </li>
                <li onClick={hideMenu}>
                    <Link to="/Contato">
                        <CgPhone /> Contato
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;