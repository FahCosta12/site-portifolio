import React from "react";
import { BsPerson } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import profilePhoto from "../../images/profilePhoto.png";
import "./home.css";
import Type from "./type";
const Home = () => {
    return (
        <section>
            <div className="HomePage">
                <div className="HomeText">
                    <h1>Olá!</h1>
                    <h1>
                        Eu sou o <b>Fabrício Costa</b>
                    </h1>

                    <Type />
                    
                    <Link to="/Sobre" key="sobre">
                        <button>
                            Sobre
                            <BsPerson />
                        </button>
                    </Link>

                    <Link to="/Contato" key="contato">
                    <button>
                        Contato <CgPhone/>
                    </button>
                    </Link>
                </div>
                <Tilt>
                    <img className="profilePhoto" src={profilePhoto} alt="" />
                </Tilt>
            </div>
        </section>
    )
}

export default Home;