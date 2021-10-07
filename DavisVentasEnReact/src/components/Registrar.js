import React from 'react'

function Registrar() {
    return (
        <section >
            <ul>
               
                <li>
                   <button className="finalizar">Identificador de venta</button>
                   <input  id="filter" type="text" name="producto" id="" placeholder=""></input>
                </li>
                <li>
                   <button className="finalizar">Producto</button>
                   <input id="filter" type="text" name="producto" id="" placeholder=""></input>
                </li>
                <li>
                   <button className="finalizar">Valor</button>
                   <input id="filter" type="text" name="producto" id="" placeholder=""></input>
                </li>
                <li>
                   <button className="finalizar">ID. Cliente</button>
                   <input id="filter" type="text" name="producto" id="" placeholder=""></input>
                </li>
                <li>
                   <button className="finalizar">Nombre Cliente</button>
                   <input id="filter" type="text" name="producto" id="" placeholder=""></input>
                </li>
                <li>
                    <button className="registrarventa">Registrar venta</button>
                </li>
               
            </ul>
        </section>
    )
}

export default Registrar
