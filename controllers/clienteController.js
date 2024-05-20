const Cliente = require('../models/Cliente');

//funcion para buscar clientes
exports.buscarClientes = async(req, res) => {

    try {

        const cliente = await Cliente.find();
        res.json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar los clientes');
    }

}


// funcion agregar clientes 
exports.agregarClientes = async(req, res) => {

    try {

        let clientes;
        clientes = new Cliente (req.body)
        await clientes.save();
        res.send(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente');
    }

     
}

// Funcion para buscar un solo cliente 

exports.buscarCliente = async(req, res) =>{

    try { 
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente){
            res.status(404).json({msg:"cliente no encontrado con ese ID"});
        }
        res.send(cliente);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un cliente');
    }

}

// Esta funcion nos sirve para eliminar un cliente

exports.eliminarCliente = async(req, res) => {

    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente){
            res.status(404).json({msg:"El cliente no existe"})
            return
        }

        await Cliente.findOneAndRemove({_id: req.params.id});
        res.json({msg:"El cliente ha sido eliminado"});
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar un cliente');
    }
}

// esta funcion es para actualizar un cliente 

exports.actualizarCliente = async(req, res) => {
    try {
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params._id);

        if(!cliente){
            res.status(404).json({msg: "el cliente no existe"});
            return
        }
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;

            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new:true});
            res.json(cliente);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el cliente');
    }
};