const {obterPessoas} = require('./service')

/*
Desestruturação exemplo: 


const item = {
    nome: 'Erick',
    idade: 12,
}
const {nome} =item
console.log(nome)

const {nome, idade} =item
console.log(nome, idade)
*/

Array.prototype.meuFilter = function (callback) {
    const lista = []
    for(item in this) {
        const result = callback(item, index, this)
        if(!result) continue;
        lista.push(item);
    }
    return lista
}

async function main() {
    try{

        const {
            results
        } = await obterPessoas(`a`)

        // const familiaLars = results.filter(function(item){
            
        //     //por padrao precisa retornar um booleano
        //     //para informar se deve manter ou remover da lista
        //     //false > remove
        //     //true > mantem
        //     //nao encontrou = -1
        //     //encontrou = indexNoArray

        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })

        const familiaLars = results.meuFilter(item => {
            console.log(`index: ${index}`, lista.length)
            return    item.name.toLowercase().indexOf('lars') !== -1
            
        }
        )
        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)



    }catch(error){
        console.error(error)
    }
}
main()