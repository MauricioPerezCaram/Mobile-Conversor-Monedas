import React, { useState } from "react";

function ChilenoAArgentino() {
  const valorDelChileno = 1.1;

  const [montoChileno, setMontoChileno] = useState("");
  const [resultado, setResultado] = useState(null);

  const convertirAArgentino = () => {
    const montoArgentino = (parseFloat(montoChileno) * valorDelChileno).toFixed(
      2
    ); // monto que me pasa el andres 1.1
    setResultado(montoArgentino);
  };

  return (
    <div>
      <p>Ingresa el monto en Peso Chileno</p>
      <input
        type="number"
        value={montoChileno}
        onChange={(e) => setMontoChileno(e.target.value)}
      />
      <button onClick={convertirAArgentino}>Convertir a Argentino</button>

      {resultado !== null && (
        <div>
          <p>El resultado en Peso Argentino es:</p>
          <p>{"$ " + resultado}</p>
        </div>
      )}
    </div>
  );
}

export default ChilenoAArgentino;
