import { useState } from "react"

export default function formulario() {

    const [valor, setValor] = useState("Digite Algo")

    function alterarInput() {
        setValor(valor + "!")
    }


    return (
        <div>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)}></input>
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}