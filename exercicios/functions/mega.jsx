export function mega(qtde=6, numeros=[]) {

    qtde = +qtde // Aqui o + converse de string para int
    
    if (qtde < 6 && qtde > 60) {
        throw "Quantidade Inválida"
    }

    if (numeros.length === qtde) {
        return numeros.sort((n1, n2) => n1 - n2)
    }
        
    const numeroAleatorio = parseInt(Math.random() * 60) + 1  // O "+ 1" é porque Math gera de 0 até 59

    if (!numeros.includes(numeroAleatorio)) {
        return mega(qtde, [...numeros, numeroAleatorio])
    } else {
        return mega(qtde, numeros)
    }
    
}

// console.log(mega(15))