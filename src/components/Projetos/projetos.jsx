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
                <ProjetoBox projetoFoto={MolduraNotebook} projetoNome="Em Breve"/>
                <ProjetoBox projetoFoto={MolduraNotebook} projetoNome="Em Breve"/>
                <ProjetoBox projetoFoto={MolduraNotebook} projetoNome="Em Breve"/>
                <ProjetoBox projetoFoto={MolduraNotebook} projetoNome="Em Breve"/>
            </div>
        </section>
    );
};

export default Projetos; 