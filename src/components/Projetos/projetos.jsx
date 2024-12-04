import MolduraNotebook from "../../images/moldura-notebook.png";
import ProjImgParsense from '../../images/projParkSense.png';
import ProjImgTemperamentais from '../../images/projTemperamentais.png';
import "./projeto.css";
import ProjetoBox from "./projetoBox";
const Projetos = () => {
    return (
        <section>
            <h1 className="ProjetoTitulo">
                Meus <b>Projetos</b>
            </h1>

            <div className="projeto">
                <ProjetoBox projetoFoto={ProjImgParsense} projetoNome="ParkSense"/>
                <ProjetoBox projetoFoto={ProjImgTemperamentais} projetoNome="Temperamentais"/>
                <ProjetoBox projetoFoto={MolduraNotebook} projetoNome="Projeto03"/>
                <ProjetoBox projetoFoto={MolduraNotebook} projetoNome="Projeto04"/>
            </div>
        </section>
    );
};

export default Projetos; 