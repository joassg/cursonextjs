export function Filho(props) {
    return (
        <div>
            <h1>Sou filho</h1>
            <button onClick={props.funcao}>Falar com o Pai #1</button>
            <button onClick={
                () => props.funcao("Passei no ENEM!", "Uhuuuu", 10)}>
                     Falar com o Pai #2</button>
        </div>
    )
}