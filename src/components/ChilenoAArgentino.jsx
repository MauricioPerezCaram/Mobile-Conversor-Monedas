import React, { useEffect, useState } from "react";

function ChilenoAArgentino() {
  const [valorDelChileno, setValorDelChileno] = useState(
    () => JSON.parse(localStorage.getItem("valorDelChileno")) || ""
  );
  const [montoChileno, setMontoChileno] = useState("");
  const [resultadoChileno, setResultadoChileno] = useState(null);

  const convertirAArgentino = () => {
    const montoArgentino = (
      parseFloat(montoChileno) * parseFloat(valorDelChileno)
    ).toFixed(2);
    setResultadoChileno(montoArgentino);
  };

  const [montoArgentino, setMontoArgentino] = useState("");
  const [resultadoArgentino, setResultadoArgentino] = useState(null);

  const convertirAChileno = () => {
    const montoChileno = (
      parseFloat(montoArgentino) / parseFloat(valorDelChileno)
    ).toFixed(2);
    setResultadoArgentino(montoChileno);
  };

  useEffect(() => {
    localStorage.setItem("valorDelChileno", JSON.stringify(valorDelChileno));
  }, [valorDelChileno]);

  return (
    <section>
      <div>
        <div className="bandera">
          <img src="/unnamed.webp" alt="banderas" width={250} />
        </div>

        <div className="input">
          <p>Ingresa el valor del Peso Chileno en relación al Peso Argentino</p>
          <input
            type="number"
            value={valorDelChileno}
            onChange={(e) => setValorDelChileno(e.target.value)}
          />
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
      </div>
    </section>
  );
}

export default ChilenoAArgentino;
