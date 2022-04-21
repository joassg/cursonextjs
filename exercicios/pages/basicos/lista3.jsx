function geralista (final) {
    
    const lista =  []
    for (let i = 1; i <= final; i++){
        lista.push(<span>{i}, </span>)
    }    
       
    return lista
}

export default function lista () {

    return (
        <div>
            <div>
                {geralista(10)}  
            </div>
            <div>
                {geralista(3)}  
            </div>
        </div>
    )
}