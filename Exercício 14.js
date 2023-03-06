const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];
const menoresValores = []
let indiceA = 0
let indiceB = 0

while (indiceA < arrayA.length && indiceB < arrayB.length) {
    if (arrayA[indiceA] < arrayB[indiceB]) {
        menoresValores.push(arrayA[indiceA])

    } if (arrayB[indiceB] < arrayA[indiceA]) {
        menoresValores.push(arrayB[indiceB])

    }
    indiceA++
    indiceB++


}
console.log(menoresValores)




