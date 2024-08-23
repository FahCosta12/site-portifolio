import emailjs from "emailjs-com";
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
	const [erro, setErro] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErro(false);
		if (!formData.nome || !formData.email || !formData.mensagem) {
			setErro(true);
			return;
		}
		emailjs
			.sendForm(
				"service_df523up",
				"template_t0o680y",
				e.target,
				"ZLoOy-Fajgy5Ga3AI"
			)
			.then((response) => {
				console.log("Mensagem enviada!", response.status, response.text);
				setEnviado(true);
			})
			.catch((err) => {
				console.log("Erro ao enviar a mensagem!", err);
			});
	};

	return (
		<section className="container-contato">
			<h2>Contate-me</h2>
			{enviado ? (
				<p className="mensagem-enviada">A sua mensagem foi enviado!</p>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="nome">Nome:</label>
						<input
							type="text"
							id="nome"
							name="nome"
							value={formData.nome}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="mensagem">Mensagem:</label>
						<textarea
							name="mensagem"
							id="mensagem"
							value={formData.mensagem}
							onChange={handleChange}
							required
						/>
					</div>

					<button type="submit" className="btn-enviar">
						Enviar <FaCheck />
					</button>
				</form>
			)}
			{erro && <p className="erro">Por favor, preencha todos os campos.</p>}
		</section>
	);
};

export default Contato;
