let numeros = [8, 11, 4, 1, 20, 10, 12, 50];
let maior = 0
let menor = Infinity


for (let numero of numeros) {
    if (numero > maior) {
        maior = numero
    }
}
for (let numero of numeros) {

    if (numero < menor) {
        menor = numero
    }
}
let diferenca = maior - menor
console.log(diferenca)

