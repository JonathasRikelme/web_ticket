
export default function Painel({ historico }) {
    //recebe uma prop historico, um array de senhas já chamadas
    return (
        //interface
        <div className="card">
            <h2>Painel</h2>
            <ul>
                {historico.map((s, i) => ( //vai "andar" por cada item do array, onde s é o vlaor da senha, e o i o indice do array
                    <li key={i}>{s}</li> // cada senha vira uma lista
                ))}
            </ul>
        </div>
    );
}
