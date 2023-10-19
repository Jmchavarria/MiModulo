import Repuesto from "../models/repuestos.model.js"


export const getRepuestos = async(req, res) =>{
    const repuestos = await Repuesto.find()
    if(!repuestos) return res.status(404).json({message: "Respuesto(s) no encontrado(s)"})
    res.json(repuestos)

}


// CREAR REPUESTO
export const createRepuestos = async(req, res) =>{
    const  { id_marca, nombre_repuesto, cantidad,precio} = req.body
    console.log(req.user) // para saber cual es el usuario que viene de la otra coleccion pero debe estar logueado
    const newRepuesto = new Repuesto({
         id_marca, nombre_repuesto, cantidad, precio
    })
    const saveRepuesto =  await newRepuesto.save()
   res.json(saveRepuesto)
}



// ELIMINAR REPUESTO
export const deleteRepuesto = async(req, res) =>{
    const repuesto = await Repuesto.findByIdAndDelete(req.params.id)
    if(!repuesto) return res.status(404).json({message: "Repuesto not found"})
    return res.sendStatus(204)
}

// ACTUALIZAR REPUESTO
export const updateRepuesto= async(req, res) =>{
    const repuesto = await Repuesto.findByIdAndUpdate(req.params.id, req.body,{ // new y true son para que el guarde los datos nuevos que ingrese el usuario
        new: true
    })
    if(!repuesto) return res.status(404).json({message: "Repuesto not found"})
    res.json(repuesto)
}
