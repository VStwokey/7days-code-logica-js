let pergunta = prompt('Você deseja adicionar uma comida na sua lista de compras?');

const categorias = ['doces', 'frutas', 'laticinios', 'congelados'];
const listas = {
    doces: [],
    frutas: [],
    laticinios: [],
    congelados: []
};

if (pergunta.toLowerCase() === 'sim') {
    while (true) {
        let categoria = prompt('Em qual categoria esta comida se encaixa? (' + categorias.join(', ') + ')');

        if (categorias.includes(categoria.toLowerCase())) {
            let comida = prompt('Digite o nome da comida:');
            listas[categoria.toLowerCase()].push(comida);

            let pergunta2 = prompt('Quer adicionar mais uma comida? (sim/não)');
            if (pergunta2.toLowerCase() !== 'sim') {
                break;
            }
        } else {
            console.log('Categoria inválida. Escolha entre: ' + categorias.join(', '));
        }
    }
}

console.log('Lista de compras:');
console.table(listas);
