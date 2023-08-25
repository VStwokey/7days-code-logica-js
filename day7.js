const resultadoElement = document.getElementById("resultado");

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Divisão por zero não é permitida";
    }
}

document.getElementById("soma").addEventListener("click", () => realizarOperacao(soma));
document.getElementById("subtracao").addEventListener("click", () => realizarOperacao(subtracao));
document.getElementById("multiplicacao").addEventListener("click", () => realizarOperacao(multiplicacao));
document.getElementById("divisao").addEventListener("click", () => realizarOperacao(divisao));
document.getElementById("sair").addEventListener("click", () => resultadoElement.textContent = "Até a próxima");

function realizarOperacao(operacao) {
    const a = parseFloat(prompt("Digite o primeiro valor:"));
    const b = parseFloat(prompt("Digite o segundo valor:"));

    const resultado = operacao(a, b);
    resultadoElement.textContent = `Resultado: ${resultado}`;
}
