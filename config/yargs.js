
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Describe una tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Actualiza el estado de una tarea por hacer'
};

const argv = require("yargs")
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};