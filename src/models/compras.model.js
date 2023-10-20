import mongoose from "mongoose";

const comprasSchema = new mongoose.Schema({

    id_repuesto: {
        type: Number,
        ref: "repuestos",
        required: true,
    },
    cantidad:{
        type: Number,
        required: true,
    },
    precio_unitario:{
        type: Number,
        required: true,
    },
    precio_total:{
        type: Number,
        required: true,
    }, 
},{
    timestamps: true
})
// se puede poner un max lend, buscar en la documentacion
export default mongoose.model("compras", comprasSchema) // se va guardar en user 1 primer parametro el segundo es 
//el establecimiento del schema tambien es el nombre de la coleccion y se crea automaticamente