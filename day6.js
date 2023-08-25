const categorias = ['doces', 'frutas', 'laticinios', 'congelados'];
const listas = {
    doces: [],
    frutas: [],
    laticinios: [],
    congelados: []
};

while (true) {
    const acao = prompt('Você deseja adicionar ou remover uma comida na sua lista de compras? (adicionar/remover/sair)');

    if (acao.toLowerCase() === 'sair') {
        break;
    } else if (acao.toLowerCase() === 'adicionar') {
        let categoria = prompt('Em qual categoria você deseja adicionar uma comida? (' + categorias.join(', ') + ')');

        if (categorias.includes(categoria.toLowerCase())) {
            let comida = prompt('Digite o nome da comida:');
            listas[categoria.toLowerCase()].push(comida);
        } else {
            console.log('Categoria inválida. Escolha entre: ' + categorias.join(', '));
        }
    } else if (acao.toLowerCase() === 'remover') {
        let categoria = prompt('De qual categoria você deseja remover uma comida da lista? (' + categorias.join(', ') + ')');

        if (categorias.includes(categoria.toLowerCase())) {
            console.table(listas[categoria.toLowerCase()]);
            let comidaRemover = prompt('Digite o nome da comida que deseja remover:');
            
            const index = listas[categoria.toLowerCase()].indexOf(comidaRemover);
            if (index !== -1) {
                listas[categoria.toLowerCase()].splice(index, 1);
                console.log(`${comidaRemover} removido da lista.`);
            } else {
                console.log(`${comidaRemover} não encontrado na lista.`);
            }
        } else {
            console.log('Categoria inválida. Escolha entre: ' + categorias.join(', '));
        }
    } else {
        console.log('Opção inválida. Escolha entre: adicionar, remover ou sair.');
    }
}

console.log('Lista de compras:');
console.table(listas);
