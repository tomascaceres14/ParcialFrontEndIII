// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 y "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import React, { useState } from "react";
import { Stock, NoStock, Producto, ProdH5, ProdButton, ProdImg } from "./styles/styles";

export default function Item({ img, nombre, descripcion, stock, compras }) {
  const [cantStock, setCantStock] = useState(stock);

  const handleClick = () => {
    if (cantStock > 0) {
      setCantStock(cantStock - 1);
      compras();
    }
  };

  const spanStock = () => {
    if (cantStock > 0) {
      return <Stock>{cantStock}</Stock>;
    } else return <NoStock>agotado</NoStock>;
  };

  return (
    <Producto>
      <ProdImg src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <ProdH5>
        stock: {spanStock()}
      </ProdH5>
      <ProdButton onClick={() => handleClick()} disabled={cantStock === 0}>
        {cantStock > 0 ? "COMPRAR" : "SIN STOCK"}
      </ProdButton>
    </Producto>
  );
}


