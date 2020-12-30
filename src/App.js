import './App.css';
import Imagenes from './components/imagenes';
import Numeros from './components/numeros';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react'
import { Component } from 'react';
import Ubicacion from './components/ubicacion';
import { CodigoFinal } from './components/CodigoFinal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
    this.SetDatos = this.SetDatos.bind(this);
  }

  SetDatos(p, remitente) {
    this.setState({ cuenta: this.state.cuenta + 1 });
    if (this.state.cuenta <= 2) {
      if (remitente === "Imagen") {
        this.setState({
          dato1: {
            cuadro: parseInt(p, 10),
            numero: 0
          },
        });
      } else if (remitente === "Numero") {
        this.setState({
          dato1: {
            cuadro: this.state.dato1.cuadro,
            numero: parseInt(p, 10)
          },
        });
      }
    } else if (this.state.cuenta <= 4) {
      if (remitente === "Imagen") {
        this.setState({
          dato2: {
            cuadro: parseInt(p, 10),
            numero: 0
          },
        });
      } else if (remitente === "Numero") {
        this.setState({
          dato2: {
            cuadro: this.state.dato2.cuadro,
            numero: parseInt(p, 10)
          },
        });
      }
    } else if (this.state.cuenta <= 6) {
      if (remitente === "Imagen") {
        this.setState({
          dato3: {
            cuadro: parseInt(p, 10),
            numero: 0
          },
        });
      }
      else if (remitente === "Numero") {
        this.setState({
          dato3: {
            cuadro: this.state.dato3.cuadro,
            numero: parseInt(p, 10)
          },
        });
      }
    }
    else if (this.state.cuenta <= 8) {
      if (remitente === "Imagen") {
        this.setState({
          dato4: {
            cuadro: parseInt(p, 10),
            numero: 0
          },
        });
      }
      else if (remitente === "Numero") {
        this.setState({
          dato4: {
            cuadro: this.state.dato4.cuadro,
            numero: parseInt(p, 10)
          },
        });
      }
    }

    if (this.state.cuenta === 8) {
      this.setState({ Fin: true })
      this.setState({ cuadro: this.state.dato1.cuadro })
      this.setState({ cuenta: 1 })
    }
    /*console.log(this.state);*/
  }

  render() {
    if (this.state.Fin) {
      return <Ubicacion Datos={this.state} />
    }
    return (
      <Router>
        <Switch>
          <Route exact path={"/imagenes"} component={props => <Imagenes SetDatos={this.SetDatos} />} />
          <Route exact path={"/numeros"} component={props => <Numeros SetDatos={this.SetDatos} />} />
          <Route exact path={"/ubicaciones"} component={props => <Ubicacion SetDatos={this.SetDatos} />} />
          <Route exact path={"/Codigo"} component={props => <CodigoFinal SetDatos={this.SetDatos} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
