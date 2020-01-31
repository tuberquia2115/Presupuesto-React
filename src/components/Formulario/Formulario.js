import React, { useState } from 'react'
import PropTypes from 'prop-types';
import shortid from 'shortid'
import Error from '../Error/Error';

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const [img, guardarImg] = useState('');

    const capturarIMG = (e) => {
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader()
            reader.onload = e => {
                guardarImg(e.target.result)
            }
        }
        return reader.readAsDataURL(e.target.files[0])
    }

    const agregarGasto = e => {
        e.preventDefault()

        // validad
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }

        // Construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate(),
            img
        }
        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true)

        //Resetear formulario
        guardarNombre('');
        guardarCantidad(0);

    }
    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    value={nombre}
                    name="nombre"
                    onChange={e => guardarNombre(e.target.value)}
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                    name="cantidad"
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                />
            </div>
            <div className="campo">
                <label>Anexar Imagen</label>
                <input
                    onChange={capturarIMG}
                    type="file"
                    name="imagen"
                    accept="image/png, .jpeg, .jpg, image/gif"
                    className="u-full-width"


                />
            </div>
            <input
                className="button-primary u-full-width"
                type="submit"
                value="Agregar Gasto"
            />
        </form>
    );
}
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
export default Formulario;