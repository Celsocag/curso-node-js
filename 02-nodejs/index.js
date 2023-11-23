/*
0 obter usuario
1 Obter o número de telefone de um usuario a partir de seu ID
2 obter o endereço do usuario pelo ID
*/

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)




function obterUsuario() {
    //quando der problema -> reject(ERRO)
    //quando sucess -> resolve

    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            // return reject(new Error('DEU RUIM FEDERAL'))

            return resolve ({
                id: 1,
                nome:"Calabreso do zap",
                dataNascimento: new Date()
            })
        }, 1000)
    })
   
}

function obterTelefone(idUsuario){
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(() =>{
            return resolve({
                telefone: '119898989898',
                ddd: 11
            })
        },2000);
    })
}
function obterEndereco(idUsuario, callback) {
    setTimeout(()=> {
        return callback(null, {
            rua: 'lek las',
            numero:654
        })
    },2000)
}


async function main() {
    try{
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd})${telefone.telefone},
            Endereço: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida-promise')

    }catch (error) {
        console.error('babou', error)
    }

}
main()

// const usuarioPromise = obterUsuario()
// //para manipular o sucesso usamos a função .then
// //para manipular erro, .catch


// usuarioPromise
//     .then(function (usuario){
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result){
//             return{
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then(function (resultado) {
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result){
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function (resultado) {
//         console.log(`
//         Nome: ${resultado.usuario.nome},
//         Emdereço: ${resultado.endereco.rua}, ${resultado.endereco.numero},
//         Telefone: (${resultado.telefone.ddd})${resultado.telefone.numero}
        
//         `)
//     })
//     .catch(function (error){
//         console.error('DEU RUIM', error)
//     })

// function resolverUsuario(erro, usuario){
//     console.log('usuario', usuario)
// }

// obterUsuario(function resolverUsuario(error, usuario){
//     if (error) {
//         console.error('DEU RUIM EM usuario', error)
//         return;
//     }


//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if (error1) {
//             console.error('DEU RUIM EM telefone', error)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if (error2) {
//                 console.error('DEU RUIM EM endereco', error)
//                 return;
//             } 
//             console.log(
//                 `
//                 Nome: ${usuario.nome},
//                 Endereço: ${endereco.rua},${endereco.numero},
//                 Telefone: ${telefone.ddd} + ${telefone.telefone}
//                 `
//             )
//         })
//     })
// })

// });
// const telefone = obterTelefone(usuario.id);
// console.log('usuario', usuario)
// console.log('telefone', telefone)