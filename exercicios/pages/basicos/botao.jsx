function acao1() {
    console.log("açao 1")
}


export default function botao () {
    function acao2() {
        console.log("açao 2")
    }

    function acao5 (e) {
        console.log(e)
    }

    return (
        <div>
            <input type="text" onChange={() => console.log ("Mudou")} />
            <input type="text" onChange={(e) => console.log (e.target.value)} />
            <button onClick={acao1}>Click#1</button>
            <button onClick={acao2}>Click#2</button>
            <button onClick={function (){
                console.log("acao3")}}>Click#3</button>
            <button onClick={() => console.log("ação4")}>Click#4</button>
            <button onClick={acao5}>Click#5</button>
            <button onClick={e => acao5(e.altKey)}>Click#5a</button>
        </div>
    )
}