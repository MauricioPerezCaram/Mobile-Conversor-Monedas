import React, { useState } from "react";

function ArgentinoAChileno() {
  const valorDelChileno = 1.1;

  const [montoArgentino, setMontoArgentino] = useState("");
  const [resultado, setResultado] = useState(null);

  const convertirAChileno = () => {
    const montoChileno = (parseFloat(montoArgentino) / valorDelChileno).toFixed(
      2
    ); // monto que me pasa el andres 1.1
    setResultado(montoChileno);
  };

  return (
    <div>
      <p>Ingresa el monto en Peso Argentino</p>
      <input
        type="number"
        value={montoArgentino}
        onChange={(e) => setMontoArgentino(e.target.value)}
      />
      <button onClick={convertirAChileno}>Convertir a Chileno</button>

      {resultado !== null && (
        <div>
          <p>El resultado en Peso Chileno es:</p>
          <p>{"$ " + resultado}</p>
        </div>
      )}
    </div>
  );
}

export default ArgentinoAChileno;
