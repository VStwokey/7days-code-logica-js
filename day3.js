let perg = prompt('Você gostaria de seguir no front-end ou back end?')

function FrontEnd() {
    if (perg.toLowerCase() === 'front-end' || 'front end') {
        let resp = prompt('Quer aprender React ou Vue.Js?');

        if (resp.toLowerCase() === 'react') {
            console.log('Você escolheu aprender React');
        }
        else if (resp.toLowerCase() === 'vue'|| resp.toLowerCase() === 'vue.js') {
            console.log('Você escolheu aprender Vue.js')
        } else {
            console.log('Opção inválida')
        }
    }
}

function BackEnd() {
    if (perg.toLowerCase() === 'back-end' || 'back end') {
        let resp = prompt('Quer aprender C# ou Java?');

        if (resp.toLowerCase() === 'c#'|| resp.toLowerCase() ===  'csharp') {
            console.log('Você escolheu aprender C#');
        }
        else if (resp.toLowerCase() === 'java') {
            console.log('Você escolheu aprender Java')
        } else {
            console.log('Opção inválida')
        }
    }
}

if (perg.toLowerCase() === 'front end' || perg.toLowerCase() === 'front-end') {
    FrontEnd()
} else if (perg.toLowerCase() === 'back end' || perg.toLowerCase() === 'back-end') {
    BackEnd()
} else {
    console.log('Opção inválida')
}