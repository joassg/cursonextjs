import { useState } from "react";
import Numerodisplay from "../../components/NumeroDisplay";


export default function contador() {

    const [num, setNum] = useState(0)

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }

    return (
        <div style={estilo}>
            <h1>Contador</h1>
            <Numerodisplay numero = {num} />
            <br/>
            <div margin="20" flexdirection="row">
                <button onClick= {() => setNum(num + 1)}>Soma</button>
                <button onClick= {() => setNum(num - 1)}>Subt</button>
            </div>
        </div>
    )

}