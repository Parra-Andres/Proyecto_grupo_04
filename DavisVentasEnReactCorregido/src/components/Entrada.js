import React from 'react'

function Entrada() {
    return (
        <div className = "buscarID">
            <input type="text"
            className = "entradaTest"
            value = {'Identificador único'}
            />
            <button className = "botonBuscar">Buscar</button>
        </div>
    )
}

export default Entrada
