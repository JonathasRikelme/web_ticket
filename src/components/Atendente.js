
export default function Atendente({ chamarProximo }) {
    //recebe uma prop chamada chamarProximo, que é uma função enviada pelo componente pai
    //essa funçao que vai chamar a outra senha
    return (
        //interface...
        <div className="card">
            <h2>Atendente</h2>
            <button onClick={chamarProximo}>Chamar Próximo</button>
        </div>
    );
}
