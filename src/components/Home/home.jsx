import React from "react";
import { BsPerson } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import Type from "../Type/type";

const Home = () => {
    return (
        <div>
            <div className="HomePage">
                <div className="HomeText">
                    <h1>Olá!</h1>
                    <h1>Eu sou o <b>Fabrício Costa</b></h1>
                    <Type />
                    <Link to='/Sobre'>
                        <button>
                            Sobre Mim
                            <BsPerson />
                        </button>
                    </Link>

                    <Link to='/Contato'>
                    <button>
                        Contato <CgPhone/>
                    </button>
                    </Link>
                </div>
                <Tilt>
                    <img className="Avatar" src="" alt="" />
                </Tilt>
            </div>
        </div>
    )
}

export default Home;