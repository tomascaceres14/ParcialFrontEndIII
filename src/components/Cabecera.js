import React from 'react'
import { Header, HeaderH1, HeaderSpan } from './styles/styles';

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({total}) {
  
  return (
    <Header>
        <HeaderH1>C.A.B.J.'s E-Market</HeaderH1>
        <p>Total de productos: <HeaderSpan>{total}</HeaderSpan></p>
    </Header>
  )
}
