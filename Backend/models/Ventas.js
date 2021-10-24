const { Schema, model } = require('mongoose')
const Estado = require ('./Estado')

const VentasSchema = Schema(
    {
        id_Venta: {
            type: Number,
            required: true
        },
        id_producto: {
            type: Schema.Types.Number,
            ref : "Producto",
            required: true
        },
        Nombre_producto: {
            type: Schema.Types.String,
            ref: "Producto",
            required: true,
        },
        Valor_Producto: {
            type: Schema.Types.Number,
            ref: "Producto",
            required: true
        },
        Cantidad_Producto: {
            type: Number,
            required: true
        },
        id_cliente: {
            type: String,
            required: true
        },
        Nombre_cliente: {
            type: String,
            required: true
        },
        id_vendedor: {
            type: Schema.Types.ObjectId,
            ref: "Usuario",
            required: true
        },
        Fecha:{
            type: Date,
            required: true
        },
        Valor_Total:{
            type: Number,
            required: true
        },
        Estado: {
            type: Schema.Types.ObjectId,
            ref: "Estado",
            required: true
        },
        
    },
)

module.exports = model('Ventas', VentasSchema)