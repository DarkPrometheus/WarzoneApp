import React, { useState } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Imagenes from './components/imagenes';
import Numeros from './components/numeros';
import Ubicacion from './components/ubicacion';
import { CodigoFinal } from './components/CodigoFinal';
import { HomePage } from './components/HomePage';

import './App.css';

export const App = () => {

  const [state, setState] = useState(
    {
      dato1: {
        cuadro: 0,
        numero: 0
      },
      dato2: {
        cuadro: 0,
        numero: 0
      },
      dato3: {
        cuadro: 0,
        numero: 0
      },
      dato4: {
        cuadro: 0,
        numero: 0
      },
      cuenta: 1,
      Fin: false,
      cuadro: 0
    },
  );

  const { dato1, dato2, dato3, dato4, cuenta, Fin, cuadro } = state;
  const { cuadro: cuadroD1 } = dato1;

  const SetDatos = (p, remitente) => {
    setState({ cuenta: cuenta + 1 });

    if (cuenta <= 2) {
      if (remitente === "Imagen") {
        console.log("Cuadro: " + p)
        setState({ ...state, dato1: { ...state.dato1, cuadro: parseInt(p, 10) } });
      }
      else if (remitente === "Numero") {
        console.log("Numero: " + p)
        setState({ ...state, dato1: { ...state.dato1, numero: parseInt(p, 10) } });
      }
    }
    else if (cuenta <= 4) {
      if (remitente === "Imagen") {
        setState({ ...state, dato2: { ...state.dato2, cuadro: parseInt(p, 10) } });
      }
      else if (remitente === "Numero") {
        setState({ ...state, dato2: { ...state.dato2, numero: parseInt(p, 10) } });
      }
    }
    else if (cuenta <= 6) {
      if (remitente === "Imagen") {
        setState({ ...state, dato3: { ...state.dato3, cuadro: parseInt(p, 10) } });
      }
      else if (remitente === "Numero") {
        setState({ ...state, dato3: { ...state.dato3, numero: parseInt(p, 10) } });
      }
    }
    else if (cuenta <= 8) {
      if (remitente === "Imagen") {
        setState({ ...state, dato4: { ...state.dato4, cuadro: parseInt(p, 10) } });
      }
      else if (remitente === "Numero") {
        setState({ ...state, dato4: { ...state.dato4, numero: parseInt(p, 10) } });
      }
    }

    if (cuenta === 8) {
      setState({ Fin: true })
      setState({ cuadro: this.state.dato1.cuadro })
      setState({ cuenta: 1 })
      console.log(state)
    }
    console.log(state)
  }

  if (Fin) {
    return <Ubicacion Datos={this.state} />
  }
  return (
    <Router>
      <Switch>
        <Route exact path={"/imagenes"} component={props => <Imagenes SetDatos={SetDatos} />} />
        <Route exact path={"/numeros"} component={props => <Numeros SetDatos={SetDatos} />} />
        <Route exact path={"/ubicaciones"} component={props => <Ubicacion SetDatos={SetDatos} />} />
        <Route exact path={"/Codigo"} component={props => <CodigoFinal SetDatos={SetDatos} />} />
        <Route exact path={"/"} component={HomePage} />
      </Switch>
    </Router>
  );
}
