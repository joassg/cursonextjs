import { useRouter } from 'next/router'

export default function Buscar() {

    const router = useRouter()
    console.log(router)
    const id = router.query.id

    return (
        <div>
            <h1>Rotas / {id} / Buscar</h1>
        </div>
    )
}