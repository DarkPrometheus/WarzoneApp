import React from 'react'

export const CodigoFinal = (codigo) => {
    console.log("El codigo es: " + codigo)
    return (
        <div>
            <h1>El codigo final es: </h1>
            <p>{codigo}</p>
        </div>
    )
}
