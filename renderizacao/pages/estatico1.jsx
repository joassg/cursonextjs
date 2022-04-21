import { useEffect, useState } from "react"

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico1() {
    
    const [num, setNum] = useState()
   
    useEffect (() => {
        setNum(Math.random())
        }, []
    )
    
    return (
        <div>
            <h1>Estático #01</h1>
            <h2>{num}</h2>
        </div>
    )
}