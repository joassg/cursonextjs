export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props) {
    return (
        <div>
            <h1>Estatico #02</h1>
            <k2>{props.numero}</k2>
        </div>
    )
}
