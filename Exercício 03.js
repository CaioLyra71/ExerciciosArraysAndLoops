let numeros = [54, 22, 14, 10, 284];
let i = 0
let encontrado = false

for (let numero of numeros) {
    i++
    if (numero === 10) {
        console.log(i - 1)
        encontrado = true
    }
}

if (encontrado === false) {
    console.log("-1")
}



