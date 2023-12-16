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
        <div className="input">
          <input
            type="number"
            value={montoChileno}
            onChange={(e) => setMontoChileno(e.target.value)}
          />
          <button onClick={convertirAArgentino}>Convertir a Argentino</button>

          {resultadoChileno !== null && (
            <div>
              <p>El monto ingresado en Pesos Argentinos es:</p>
              <p className="resultado resultadoChileno">
                {"$ " + resultadoChileno}
              </p>
            </div>
          )}
        </div>
      </div>
      <h1>-----------------</h1>
      <div className="input">
        <p>Ingresa el monto en Peso Argentino</p>
        <input
          type="number"
          value={montoArgentino}
          onChange={(e) => setMontoArgentino(e.target.value)}
        />
        <button onClick={convertirAChileno}>Convertir a Chileno</button>

        {resultadoArgentino !== null && (
          <div>
            <p>El monto ingresado en Pesos Chilenos es:</p>
            <p className="resultado resultadoArgentino">
              {"$ " + resultadoArgentino}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ChilenoAArgentino;
