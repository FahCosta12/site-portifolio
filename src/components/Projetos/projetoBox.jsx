import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import "./projeto.css";

const ProjetoBox = ({ projetoFoto, projetoNome }) => {
	const desc = {
		ParkSenseDesc:
			"Gerenciamento Inteligente de Estacionamentos. O ParkSense é uma plataforma web inovadora voltada para o gerenciamento de estacionamentos, integrando tecnologia de inteligencia artificial (IA) para otimizar operações e melhorar a experiência do usuário. Atualmente em fase de desenvolvimento, o projeto ParkSense está sendo estruturado para atender diferentes perfis de estacionamento, desde pequenas unidades até grandes complexos urbanos. O sistema visa atender às demandas de eficiência, controle e comodidade no setor de estacionamentos. O objetivo principal é oferecer uma solução completa que combine tecnologia de ponta e IA para simplificar a gestão de estacionamentos, proporcionando benefícios tanto para administradores quanto para motorista.",
		ParkSenseGithub: "https://github.com/park-sense/ps-frontend",
		ParkSenseWebSite: "",

		TemperamentaisDesc:
			"Blog Oficial do Time. O Temperamentais é um blog criado para celebrar a paixão pelo futebol e a camaradagem entre os integrantes do time. Voltado para o entretenimento e a interação, o projeto busca ser um ponto de encontro digital onde os jogadores podem compartilhar histórias, experiências e momentos marcantes dos jogos realizados nos finais de semana. O blog está em fase de desenvolvimento, com foco em criar um ambiente digital leve e divertido para fortalecer ainda mais os laços entre os jogadores e celebrar a essênciaa do futebol de final de semana. O objetivo principal é a diverção e o espírito de equipe por meio de uma plataforma online que reúne os integrantes do time em torno do esporte que amam.",
		TemperamentaisGithub: "https://github.com/GabrielGiliotti/temperamentais",
		TemperamentaisWebSite: "",

		// Adicione mais projetos aqui
		// Exemplo:
		// OutroProjetoDesc: "Descrição do outro projeto",
		// OutroProjetoGithub: "https://github.com/FahCosta12/outro-projeto",
		// OutroProjetoWebsite: "https://outro-projeto.com",
	};
	return (
		<section className="projetoBox">
			<img className="projetoFoto" src={projetoFoto} alt="Projeto display" />
			<div>
				<br />
				<h3>{projetoNome}</h3>
				<br />
				<div className="projetoDesc">
					<p>{desc[projetoNome + "Desc"]}</p>
				</div>
				<br />
				<a href={desc[projetoNome + "Github"]} target="_blank" rel="noreferrer">
					<button>
						<FaGithub /> GitHub
					</button>
				</a>

				<a
					href={desc[projetoNome + "Website"]}
					target="_blank"
					rel="noreferrer"
				>
					<button>
						<CgFileDocument /> Site
					</button>
				</a>
			</div>
		</section>
	);
};

export default ProjetoBox;
