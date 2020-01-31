import React from 'react'
import Gastos from '../Gasto/Gasto';
import PropTypes from 'prop-types';

const ListaGastos = ({ gastos }) => {
    return (
        <div className="gastos-realizados">
            <h2>Lista de tus Gastos</h2>
            {gastos.map(gasto => (
                <Gastos
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
    );
}
ListaGastos.propTypes = {
    gastos: PropTypes.array.isRequired
}
export default ListaGastos;