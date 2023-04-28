// formas de importar/exportar
// 1 common: require
// 2 import 


export const suma = (a,b) => {
    return a + b
}

export const multi = (a,b) =>{
    return a * b
}

export const factorial = (a) => {
    let total = 1
    for(let i = 1; i <= a; i++){
        total = total * i
    }
    return total
}

export const nombre = 'matematicas'