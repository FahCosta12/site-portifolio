import MolduraNotebook from "../../images/moldura-notebook.png";
import "./projeto.css";
import ProjetoBox from "./projetoBox";
const Projetos = () => {
    return (
        <section>
            <h1 className="ProjetoTitulo">
                Meus <b>Projetos</b>
            </h1>

            <div className="projeto">
                <ProjetoBox projetoFoto={MolduraNotebook} projetoNome="Projeto-01"/>
                <ProjetoBox projetoFoto={MolduraNotebook} projetoNome="Projeto-02"/>
                <ProjetoBox projetoFoto={MolduraNotebook} projetoNome="Projeto-03"/>
                <ProjetoBox projetoFoto={MolduraNotebook} projetoNome="Projeto-04"/>
            </div>
        </section>
    );
};

export default Projetos; 