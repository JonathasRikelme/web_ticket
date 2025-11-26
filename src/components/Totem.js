
export default function Totem({ emitirSenha }) {
    //recebe uma props "emitirSenha", que será uma função enviada pelo componente pai.
    return (
        //retorna a interface
        <div className="card">
            <h2>Senhas</h2>
            <button onClick={() => emitirSenha("SP")}>Emitir SP</button>
            <button onClick={() => emitirSenha("SG")}>Emitir SG</button>
            <button onClick={() => emitirSenha("SE")}>Emitir SE</button>
        </div>
    );
}
