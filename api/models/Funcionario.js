module.exports = {
    connection : 'mysql-connection',
    schema : true,
    tableName : 'funcionario',
    attributes : {
        id : {
            type : 'integer',
            primaryKey : true,
            unique : true
        },
        institucion : 'string',
        nombre : 'string',
        apellido_1 : 'string',
        apellido_2 : 'string',
        nombre_completo : 'string',
        tipo_personal : 'string',
        cargo_nombre : 'string',
        cargo_nombre_superior : 'string',
        unidad_administrativa : 'string',
        clave_puesto : 'string',
        nombre_puesto : 'string',
        email : 'string',
        icon:'json',
        viajes : {
            collection : 'Viaje',
            via : 'funcionario'
        }
    },
    /*afterUpdate : function(funcionario,cb) {
        //Common.sendFuncionarioUpdate(funcionario,cb);
    }*/
};