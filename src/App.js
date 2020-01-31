import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta/Pregunta';
import Formulario from './components/Formulario/Formulario';
import ListaGastos from './components/ListaGastos/ListaGastos';
import ControlPresupuesto from './components/ControlPresupuesto/ControlPresupuesto';


function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0)
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false)

  useEffect(() => {
    if (crearGasto) {

      //Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])
      // Resta del presupuesto actual

      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
      guardarCrearGasto(false)
    }
  }, [gastos, gasto, crearGasto, restante])

  return (
    <div className="container">
      <h1>Gasto Mensual</h1>
      <div className="contenido-principal contenido">
        {mostrarPregunta ?
          (
            <Pregunta
              actualizarPregunta={actualizarPregunta}
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}

            />
          ) :
          (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarCrearGasto={guardarCrearGasto}
                  guardarGasto={guardarGasto}
                />
              </div>
              <div className="one-half column">
                <ListaGastos
                  gastos={gastos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
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
