let original = [3, 4, 7, 8, 1, 6, 5, 10];
let pares = []
soma = 0
for (numero of original) {
    if (numero % 2 === 0) {
        pares.push(numero)
    }

}
for (let i = 0; i < pares.length; i++) {
    soma += pares[i]

}
console.log(soma)