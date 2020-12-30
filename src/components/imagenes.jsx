import React from 'react';
import { cuadros } from '../datos/cuadros';
import { Link } from 'react-router-dom';

class Imagenes extends React.Component {
    render() {
        return (
            <div className="Imagenes">
                {
                    cuadros.map(a => {
                        return <Link to="/Numeros" key={a.id} ><img src={a.img} alt={a.id} onClick={() => this.props.SetDatos(a.id, "Imagen")} /></Link>
                    })
                }
            </div>
        )
    }
}

export default Imagenes;