import React from 'react'
import { Tarjeta } from './Tarjeta'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros que mas me gustan</div>
        <Tarjeta nombre="mario" colorfavorito="rojo"/>
        <Tarjeta nombre="luigi" colorfavorito="verde"/>
        <Tarjeta nombre="peaches" colorfavorito="durazno"/>
    </div>
  )
}
