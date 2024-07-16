import React from "react";
import './navHorizontal.css';



const NavHorizontal = () => {
    return (
        <nav>
            <header className="header-navHorizontal">
                <div className="logo">Fabrício Costa</div>
                <ul>
                    <li>
                        <button>Home</button>
                    </li>

                    <li>
                        <button>Sobre</button>
                    </li>

                    <li>
                        <button >Portifólio</button>
                    </li>

                    <li>
                        <button>Contato</button>
                    </li>
                </ul>
            </header>
        </nav>
    )
}

export default NavHorizontal;