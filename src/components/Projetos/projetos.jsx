import ProjImgParsense from '../../images/projParkSense.png';
import ProjImgTemperamentais from '../../images/projTempe.png';
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
            </div>
        </section>
    );
};

export default Projetos; 