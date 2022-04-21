export function getStaticProps() {
    return {
        revalidate: 7, // em segundos
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estatico #03</h1>
            <k2>{props.numero}</k2>
        </div>
    )
}
