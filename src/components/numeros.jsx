import React from 'react'
import { numerosp } from './../datos/numerosp';
import { numerosn } from './../datos/numerosn';
import { Link } from "react-router-dom";

class Numeros extends React.Component {
    render() {
        return (
            <div className="Numeros">
                <div className="Positivos">
                    {
                        numerosp.map(a => {
                            return <Link to="/imagenes" key={a.id} className={a.class} onClick={() => this.props.SetDatos(a.id, "Numero")}>{a.numero}</Link>
                        })
                    }
                </div>
                <div className="Negativos">
                    {
                        numerosn.map(a => {
                            return <Link to="/imagenes" key={a.id} className={a.class} onClick={() => this.props.SetDatos(a.id, "Numero")}>{a.numero}</Link>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Numeros;