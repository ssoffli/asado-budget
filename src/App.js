import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'
import './index.css'

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0)
  const [saldo, guardarSaldo] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, guardarCrearGasto] = useState(false)

  // useEffect actualizar el saldo
  useEffect(() =>{
    if (crearGasto) {
      guardarGastos([
        ...gastos,
        gasto
      ]);
      // restando del saldo de presupuesto
      const saldoRestante = saldo - gasto.cantidad;
      guardarSaldo(saldoRestante);

      guardarCrearGasto(false);
    } 
  }, [gasto, crearGasto, gastos, saldo]);

  // const agregarNuevoGasto = gasto => {

  // }

  return (
    <div className="container">
      <h1>Presupuesto del Asado</h1>
      <div className="contenido-principal contenido">
        {mostrarpregunta ?
        (
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarSaldo={guardarSaldo}
            actualizarPregunta={actualizarPregunta}
          />
        ) :
        (
        <div className="row">
          <div className="one-half column">
            <Formulario
              guardarGasto = {guardarGasto}
              guardarCrearGasto = {guardarCrearGasto}
            />
          </div>
          <div className="one-half column">
            <Listado
              gastos = {gastos}
            />
            <ControlPresupuesto 
              presupuesto = {presupuesto}
              saldo = {saldo}
            />
          </div>
        </div>
        )
        }

       </div>
    </div>
  );
}

export default App;
