import  Compra from "../models/compras.model.js"
export const getCompras = async(req, res) =>{
    const compras = await Compra.find()
    if(!compras) return res.status(404).json({message: "Clientes no encontrados"})
    res.json(compras)

}

export const createCompra = async(req, res) =>{
    const  {id_repuesto, cantidad, precio_unitario, precio_total} = req.body
    console.log(req.user) // para saber cual es el usuario que viene de la otra coleccion pero debe estar logueado
    const newCompra = new Compra({
        id_repuesto, cantidad, precio_unitario, precio_total
    })
    const saveCompra =  await newCompra.save()
   res.json(saveCompra)
}
export const deleteCompra = async(req, res) =>{
    const compra = await Compra.findByIdAndDelete(req.params.id)
    if(!compra) return res.status(404).json({message: "cliente not found"})
    return res.sendStatus(204)
}

export const updateCompra= async(req, res) =>{
    const compra = await Compra.findByIdAndUpdate(req.params.id, req.body,{ // new y true son para que el guarde los datos nuevos que ingrese el usuario
        new: true
    })
    if(!compra) return res.status(404).json({message: "cliente not found"})
    res.json(compra)
}
