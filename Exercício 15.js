const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
i = 0
let pares = []
let impares = []
while (i < original.length) {
    if (original[i] % 2 === 0) {
        pares.push(original[i])

    } else {
        impares.push(original[i])
    }
    i++
}
console.log(`Os numeros pares são ${pares}`)
console.log(`Os numeros ímpares são ${impares}`)