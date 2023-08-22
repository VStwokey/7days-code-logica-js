const menor = 0
const maior = 10

let numSorteado = parseInt(Math.random(0, 10) * maior)
console.log(numSorteado)

let numEscolhido = prompt('Digite um número')

if (numEscolhido != numSorteado) {

    for (let i = 3; i > 0; i--) {
       let num = prompt('Você tem mais '+ i +' tentativas')
        if(num == numSorteado) {
            console.log('Você Acertou!')
            break;
        } else if (i == 1) {
            console.log('Você perdeu!')
        }
        
    }

} else {
    console.log('Você Acertou!')
}


