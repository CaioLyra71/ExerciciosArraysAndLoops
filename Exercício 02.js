let letras = ["A", "e", "B", "C", "E", "z",];
let total = 0

for (let letra of letras) {
    if (letra === "e" || letra === "E") {
        total++
    }
}
if (total > 0) {
    console.log(`Foram encontradas ${total} letras "E" ou "e"`)
} else {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada`)
}


