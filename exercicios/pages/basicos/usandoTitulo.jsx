import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                principal = "Escrever como Título"
                secundario = "Aqui não foi passado parâmetro"
            />
            <Titulo 
                principal = "Informando que deve ser pequeno"
                secundario = "Escrevo em pequeno"
                pequeno = {true}
            />
            <Titulo 
                principal = "Aqui a mesma coisa"
                secundario = "Apenas sem o {True}, pois é padrão"
                pequeno
            />
        </div>
    )
}