import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Error from '../Error/Error';


const Pregunta = ({ guardarRestante, guardarPresupuesto, actualizarPregunta }) => {
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false);

    const DefinirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //para agreagr el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if ((cantidad < 1 || isNaN(cantidad))) {
            guardarError(true);
            return
        }
        // si pasa la validación Error lo ponemos a false
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false)



    }
    return (
        <React.Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es Incorrecto" /> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={DefinirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </React.Fragment>
    );
}
Pregunta.propTypes = {
    guardarRestante: PropTypes.func.isRequired,
    guardarPresupuesto: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired,
}
export default Pregunta;