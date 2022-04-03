import React from 'react';
import { ubicaciones } from './../datos/ubicaciones';
import { CodigoFinal } from './CodigoFinal';
import Imagenes from './imagenes';

class Ubicacion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dato1: {
                cuadro: this.props.Datos.dato1.cuadro,
                numero: this.props.Datos.dato1.numero,
                romano: this.props.Datos.dato1.romano
            },
            dato2: {
                cuadro: this.props.Datos.dato2.cuadro,
                numero: this.props.Datos.dato2.numero,
                romano: this.props.Datos.dato2.romano
            },
            dato3: {
                cuadro: this.props.Datos.dato3.cuadro,
                numero: this.props.Datos.dato3.numero,
                romano: this.props.Datos.dato3.romano
            },
            dato4: {
                cuadro: this.props.Datos.dato4.cuadro,
                numero: this.props.Datos.dato4.numero,
                romano: this.props.Datos.dato4.romano
            },
            cuenta: this.props.Datos.cuenta,
            Fin: false,
            cuadro: this.props.Datos.cuadro,
            codigo: "0000"
        };
    }

    handleClick(n) {
        this.setState({ cuenta: this.state.cuenta + 1 })
        console.log(this.state.cuenta);
        if (this.state.cuenta === 1) {
            console.log("Dato 1");
            this.setState({
                dato1: {
                    cuadro: this.state.dato1.cuadro,
                    numero: this.state.dato1.numero,
                    romano: n
                },
                cuadro: this.state.dato2.cuadro
            });
        } else if (this.state.cuenta === 2) {
            console.log("Dato 2");
            this.setState({
                dato2: {
                    cuadro: this.state.dato2.cuadro,
                    numero: this.state.dato2.numero,
                    romano: n
                },
                cuadro: this.state.dato3.cuadro
            });
        } else if (this.state.cuenta === 3) {
            console.log("Dato 3");
            this.setState({
                dato3: {
                    cuadro: this.state.dato3.cuadro,
                    numero: this.state.dato3.numero,
                    romano: n
                },
                cuadro: this.state.dato4.cuadro
            });
        }

        if (this.state.cuenta < 4) {
            return <Ubicacion Datos={this.state} />
        }
        else {
            let num1 = this.state.dato1.numero + this.state.dato1.romano;
            let num2 = this.state.dato2.numero + this.state.dato2.romano;
            let num3 = this.state.dato3.numero + this.state.dato3.romano;
            let num4 = this.state.dato4.numero + n;

            let codigo = num1 + "" + num2 + "" + num3 + "" + num4 + "";

            this.setState({ codigo: codigo })
            /*return (
                <div>
                    <h1>El codigo final es: </h1>
                    <p>{codigo}</p>
                </div>
            )*/
        }
    }

    render() {
        this.fn();
        return (
            <div className="Ubicaciones">
                <div className="Codigo">
                    <h1>El codigo final es: </h1>
                    <p>{this.state.codigo}</p>
                </div>
                <img src={ubicaciones[this.state.cuadro].img} alt="" />
                <div className="Romanos">
                    <p className="NumRomano" onClick={() => this.handleClick(1)}>I</p>
                    <p className="NumRomano" onClick={() => this.handleClick(2)}>II</p>
                    <p className="NumRomano" onClick={() => this.handleClick(3)}>III</p>
                    <p className="NumRomano" onClick={() => this.handleClick(4)}>IV</p>
                    <p className="NumRomano" onClick={() => this.handleClick(5)}>V</p>
                    <p className="NumRomano" onClick={() => this.handleClick(6)}>VI</p>
                    <p className="NumRomano" onClick={() => this.handleClick(7)}>VII</p>
                    <p className="NumRomano" onClick={() => this.handleClick(8)}>VIII</p>
                    <p className="NumRomano" onClick={() => this.handleClick(9)}>IX</p>
                </div>
            </div>
        )
    }
}
export default Ubicacion;