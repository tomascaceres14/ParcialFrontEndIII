// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import React from "react";
import data from "./data.json";
import Item from "./Item";
import { ListadoDiv } from "./styles/styles"

export default function Listado({ compras }) {
  return (
    <ListadoDiv className="container">
      {data.map( obj => (
        <Item
          key={obj.id}
          img={obj.img}
          nombre={obj.producto.nombre}
          descripcion={obj.producto.descripcion}
          stock={obj.stock}
          compras={compras}
        />
      ))}
    </ListadoDiv>
  );
}
