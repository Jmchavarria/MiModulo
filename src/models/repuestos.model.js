import mongoose from "mongoose";

const repuestosSchema = new mongoose.Schema({

    nombre_repuesto: {
        type: String,
        required: true
    },
    cantidad:{
        type: Number,
        required: true,
    },
    precio:{
        type: Number,
        required: true
    }
},{
    timestamps: true
})
// se puede poner un max lend, buscar en la documentacion
export default mongoose.model("repuestos", repuestosSchema) // se va guardar en user 1 primer parametro el segundo es 
//el establecimiento del schema tambien es el nombre de la coleccion y se crea automaticamente