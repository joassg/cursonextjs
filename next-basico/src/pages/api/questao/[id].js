export default function questao(req, res) {

    if (req.method === "GET") {
        get(req, res)

    } else {
        return res.status(405).send()
    }


    function get(req, res) {
        const id = req.query.id;
        res.status(200).json ({
            id,
            enunciado: 'Qual é a sua cor preferida?',
            resposta: [
                'Branca', 'Vermelha', 'Amarela','Verde'
            ]
        })
    }
}