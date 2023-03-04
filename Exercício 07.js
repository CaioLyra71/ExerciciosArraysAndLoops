let nomes = ["Ana", "Joana", "Carlos", "amanda"]
let iniciaComA = []
for (let nome of nomes) {
    if (nome[0] === "A" || nome[0] === "a") {
        iniciaComA.push(nome)
    }

}
console.log(iniciaComA)