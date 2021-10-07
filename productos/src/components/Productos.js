import React from 'react'
import Datos from './Datos'
import Entrada from './Entrada'
import Registrar from './Registrar'
import TDatos from './TDatos'

function Productos() {
    return (
        <div className="seccionPag">
            <div className="TituloProductos">Ventas activas</div>
            <div className="interactBar">
                <form>
                    <Entrada />
                </form>
                
            </div>
            <table className="tableUsers">
                <TDatos />
                <Datos />
                <Datos />
                <Datos />
            </table>
            <div className="agregar">
                 <Registrar />
            </div>
        </div>
        
    )
}

export default Productos
