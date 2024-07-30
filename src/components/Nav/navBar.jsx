import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./navBar.css";

const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } else {
            setnavbarblur(false);
        }
    }

    let showMenu = () => {
        let bar = document.getElementsByClassName("bar");
        let ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");
        ham[0].classList.toggle("showNavbar");
    };

    let hideMenu = () => {
        let bar = document.getElementsByClassName("bar");
        let ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    };

    window.addEventListener("scroll", scrollHandler);

    return (
        <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
            <h1 title="Reload" onClick={() => window.location.reload(true)} className="Logo">
                FC
            </h1>

            <div className="Hamburger" onClick={showMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className="NavBarLinks">
                <li onClick={hideMenu}>
                    <Link to='/'>
                        <AiOutlineHome /> Home
                    </Link>
                </li>
                <li onClick={hideMenu}>
                    <Link to='/Sobre'>
                        <BsPerson /> Sobre
                    </Link>
                </li>
                <li onClick={hideMenu}>
                    <Link to='/Projetos'>
                        <BsCodeSlash /> Projetos
                    </Link>
                </li>
                <li onClick={hideMenu}>
                    <Link to='/Contato'>
                        <CgPhone /> Contato
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;