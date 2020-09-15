export const alertaPresupuesto = (presupuesto, saldo) => {
    let clase;
    
    if ((presupuesto * 0.25) > saldo) {
        clase = "alert alert-danger"
    }else if ((presupuesto * 0.5) > saldo) {
        clase = "alert alert-warning"
    }else {
        clase = "alert alert-success"
    }

    return clase;
}