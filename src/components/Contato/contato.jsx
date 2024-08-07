import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./contato.css";

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: "",
    });

    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { nome, value } = e.target;
        setFormData({
            ...formData,
            [nome]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado!");
        setEnviado(true);
    };

    return (
        <section className="container-contato">
            <h2>Contate-me</h2>
            {enviado ? (
                <p className="mensagem-enviada">O Formulario foi enviado!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" value={formData.nome} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea name="mensagem" id="mensagem" value={formData.mensagem} onChange={handleChange} required />
                    </div>

                    <a type="submit" href="mailTo:fabricio_matheus@outlook.com">
                        <button className="btn-enviar">
                            {" "}
                            Enviar
                            <FaCheck> </FaCheck>{" "}
                        </button>
                    </a>
                </form>
            )}
        </section>
    );
};

export default Contato;