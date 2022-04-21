interface PessoaProps {
    nome: string
    // Observe que informei ser idade uma propriedade opcional ao adicinar a interrogação(?)
    idade?: number
}

export default function Pessoa(props: PessoaProps) {

    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? "Idade não informada!!!"}</div>
        </div>
    )
}