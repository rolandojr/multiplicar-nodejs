const fs = require('fs');
const colors = require('colors');

let listarTabla = (base,limite) => {
    console.log('============================='.green);
    console.log(`===tabla de ${base}==`.green);
    console.log('============================='.green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index} `);
    }
}
let crearArchivo = (base,limite=10) => {
    return new Promise((resolve,reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return
        }

        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}  = ${base*i} \n`;
            
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`,data, (err) => {
            if (err) reject(err)
            else 
            resolve(`tablas/tabla-${base}.txt`)
          });
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}