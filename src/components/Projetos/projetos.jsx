import "./projeto.css";
import ProjetoBox from "./projetoBox";

const Projetos = () => {
    return (
        <section>
            <h1 className="ProjetoTitulo">
                Meus <b>Projetos</b>
            </h1>

            <div className="projeto">
                <ProjetoBox />
                <ProjetoBox />
                <ProjetoBox />
            </div>
        </section>
    );
};

export default Projetos; 