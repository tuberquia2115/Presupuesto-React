import React from 'react'
import PropTypes from 'prop-types';

const Gastos = ({ gasto }) => (
    <li className="gastos">
        <p style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            {gasto.nombre}
            <span className="gasto">${gasto.cantidad}</span>
            {gasto.img !== "" ?
                <img alt="imagen" width="100" height="100" src={gasto.img} />
                : null}
        </p>
    </li>
);

Gastos.propTypes = {
    gasto: PropTypes.object.isRequired
}
export default Gastos;