// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import React, { useState } from "react";
import { Body } from "./components/styles/styles"

function App() {
  const [compras, setCompras] = useState(0);

  const comprasHandler = () => {
    setCompras(compras + 1);
  };

  return (
    <Body>
      <Cabecera total={compras} />
      <Listado compras={comprasHandler} />
    </Body>
  );
}

export default App;
