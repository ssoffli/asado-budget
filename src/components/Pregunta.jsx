import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Pregunta = ({guardarPresupuesto, guardarSaldo, actualizarPregunta}) => {
    
    //definimos state cantidad

    const [cantidad, setCantidad] = useState(0)
    const [error, saveError] = useState(false)

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value, 10))
    }

    // submit agregar el presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault();

        (cantidad < 1 | isNaN(cantidad)) ? saveError(true) : saveError()
        guardarPresupuesto(cantidad)
        guardarSaldo(cantidad)
        actualizarPregunta(false)
    }


    return (
        <Fragment>
            <h2>Ingresa el monto a gastar: </h2>

            {error ? <Error mensaje = "El presupuesto debe ser mayor a 0"/> : null}

            <form
                onSubmit={agregarPresupuesto}
            > 
                <input 
                    type="number" 
                    className="u-full-width" 
                    placeholder="Coloca el presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                type="submit"
                className="button-primary" 
                value="Aceptar"/>
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto:PropTypes.func.isRequired,
    guardarSaldo:PropTypes.func.isRequired,
    actualizarPregunta:PropTypes.func.isRequired
}

export default Pregunta;