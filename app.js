const {argv} = require('./config/yargs');
const colors = require('colors');
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar.js')

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base,argv.limite);
        break;
    case 'crear':
        console.log('crear')
        let base=argv.base
        let limite = argv.limite;
        crearArchivo(base,limite).then(archivo => console.log(`Archivo creado ${archivo}`.green))
                  .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
        break;
}
// console.log(module);
// let argv = process.argv[2];
// let base = argv.split('=')[1];
