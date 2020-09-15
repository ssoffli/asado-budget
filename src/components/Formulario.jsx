import React, {useState} from 'react';
import shortid from 'shortid'
import Error from './Error'
import PropTypes from 'prop-types'


const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    
    const [nombre, guardarNombre] = useState('')
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    const agregarGasto = e => {
        e.preventDefault();
        // validar
        (cantidad < 1 || isNaN(cantidad) || nombre.trim() ==='') ? guardarError(true) : guardarError(false)
        //armar gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        //pasar al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //reset form
        guardarNombre('');
        guardarCantidad(0);

    }

    
    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega los gastos: </h2>
            
            {error ? <Error mensaje='Complete ambos campos o ponga gasto mayor a 0'/> : null}
            
            <div className="campo">
                <label htmlFor="">Nombre Gasto:</label>
                <input 
                    type="text" 
                    className="u-full-width"
                    placeholder="Ej: carne"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
                <label htmlFor="">Gasto:</label>
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="Ej: 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Agregar el gasto"
                />
            </div>
        </form> 
    );
}

Formulario.propTypes = {
    guardarGasto:PropTypes.func.isRequired,
    guardarCrearGasto:PropTypes.func.isRequired
}

export default Formulario;