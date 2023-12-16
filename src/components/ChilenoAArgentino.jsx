import React, { useState } from "react";

function ChilenoAArgentino() {
  const valorDelChileno = 1.35;

  const [montoChileno, setMontoChileno] = useState("");
  const [resultadoChileno, setresultadoChileno] = useState(null);

  const convertirAArgentino = () => {
    const montoArgentino = (parseFloat(montoChileno) * valorDelChileno).toFixed(
      2
    );
    setresultadoChileno(montoArgentino);
  };

  const [montoArgentino, setMontoArgentino] = useState("");
  const [resultadoArgentino, setresultadoArgentino] = useState(null);

  const convertirAChileno = () => {
    const montoChileno = (parseFloat(montoArgentino) / valorDelChileno).toFixed(
      2
    );
    setresultadoArgentino(montoChileno);
  };

  return (
    <section>
      <div>
        <div className="bandera">
          <img src="/unnamed.webp" alt="banderas" width={250} />
        </div>

        <p>Ingresa el monto en Peso Chileno</p>
        <input
          type="number"
          value={montoChileno}
          onChange={(e) => setMontoChileno(e.target.value)}
        />
        <button onClick={convertirAArgentino}>Convertir a Argentino</button>

        {resultadoChileno !== null && (
          <div>
            <p>El resultado en Peso Argentino es:</p>
            <p>{"$ " + resultadoChileno}</p>
          </div>
        )}
      </div>
      <div>
        <p>Ingresa el monto en Peso Argentino</p>
        <input
          type="number"
          value={montoArgentino}
          onChange={(e) => setMontoArgentino(e.target.value)}
        />
        <button onClick={convertirAChileno}>Convertir a Chileno</button>

        {resultadoArgentino !== null && (
          <div>
            <p>El resultado en Peso Chileno es:</p>
            <p>{"$ " + resultadoArgentino}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ChilenoAArgentino;
