const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
i = 0
let pares = []
let impares = []

// Utilizando while

// while (i < original.length) {
//     if (original[i] % 2 === 0) {
//         pares.push(original[i])

//     } else {
//         impares.push(original[i])
//     }
//     i++
// }
// console.log(`Os numeros pares são ${pares}`)
// console.log(`Os numeros ímpares são ${impares}`)

// Utilizando for tradicional

// for (i = 0; i < original.length; i++) {
//     if (original[i] % 2 === 0) {
//         pares.push(original[i])

//     } else {
//         impares.push(original[i])
//     }
// }
// console.log(`Os numeros pares são ${pares}`)
// console.log(`Os numeros ímpares são ${impares}`)

// Utilizando For of

for (numero of original) {
    if (numero % 2 === 0) {
        pares.push(numero)

    } else {
        impares.push(numero)
    }
}
console.log(`Os numeros pares são ${pares}`)
console.log(`Os numeros ímpares são ${impares}`)