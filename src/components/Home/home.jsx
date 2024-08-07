import React from "react";
import { BsPerson } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import Type from "./type";

const Home = () => {
    return (
        <section>
            <section className="HomePage">
                <section className="HomeText">
                    <h1>Olá!</h1>
                    <h1>
                        Eu sou o <b>Fabrício Costa</b>
                    </h1>

                    <Type />
                    
                    <Link to='/Sobre'>
                        <button>
                            Sobre
                            <BsPerson />
                        </button>
                    </Link>

                    <Link to='/Contato'>
                    <button>
                        Contato <CgPhone/>
                    </button>
                    </Link>
                </section>
                <Tilt>
                    <img className="Avatar" src="" alt="" />
                </Tilt>
            </section>
        </section>
    )
}

export default Home;