import React from 'react'
import { revisarPresupuesto } from '../../Hook/Helpers/Helpers';
import PropTypes from 'prop-types'
const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <React.Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </React.Fragment>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number,
    restante: PropTypes.number,


}
export default ControlPresupuesto;