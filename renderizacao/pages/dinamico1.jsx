
export function getServerSideProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico1(props) {
    return (
        <div>
            <h1>dinâmico #01</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}