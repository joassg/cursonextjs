import { useRouter } from "next/router"
import Link from 'next/link'

export default function RotaNome() {

    const router = useRouter()
    const codigo = router.query.codigo
    const nomE = router.query.nome

    return (
        <div>
            <h1>Rota / {codigo} / {nomE}</h1>
            
            <Link href="/rotas" passHref>
                <button>Voltar</button>
            </Link>
            
        </div>
    )
}