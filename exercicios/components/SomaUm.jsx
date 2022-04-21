
export default function SomaUm (props) {
    // props.numero ++
    // Isto gera um erro porque pros é só de leitura

        const num = props.numero + 1

    return (
        <div>
            <h1>{num}</h1>
        </div>
    )

}