import React, {Fragment} from 'react';
import {alertaPresupuesto} from '../helpers';
import PropTypes from 'prop-types'

const ControlPresupuesto = ({presupuesto, saldo, gasto}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={alertaPresupuesto(presupuesto, saldo)}>
                Saldo: $ {saldo}
            </div>
        </Fragment>
     );
}

ControlPresupuesto.propTypes = {
    presupuesto:PropTypes.number.isRequired,
    saldo:PropTypes.number.isRequired
}
export default ControlPresupuesto;