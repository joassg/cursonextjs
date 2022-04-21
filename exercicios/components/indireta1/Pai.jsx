import { Filho } from "./Filho";

export default function Pai() {
    
    function falarComigo(param1, param2, param3) {
        console.log(param1, param2, param3)
    }
    
    return (
        <div>
            <h1>Sou o Pai</h1>
            <Filho funcao={falarComigo} />
        </div>
        
    )
}