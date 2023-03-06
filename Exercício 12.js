let filaDeDentro = ["Jose", "Maria", "Joao"];
let filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


while (filaDeDentro.length < 5) {
    filaDeDentro.push(filaDeFora[0])
    filaDeFora.shift()

}

console.log(`Estão na fila de dentro ${filaDeDentro}`)
console.log(`Estão na fila de fora ${filaDeFora}`)
