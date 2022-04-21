export default function handler(req, res) {
    const ids = +req.query.id;
    res.status(200).json({
        id: ids,
        nome: `João Cabral ${ids}`,
        email: `jjjsssggg${ids}@gmail.com`
    })
}