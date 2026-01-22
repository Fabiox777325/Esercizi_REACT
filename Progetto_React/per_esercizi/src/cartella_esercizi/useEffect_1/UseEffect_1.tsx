// Aggiungi un effetto collaterale al componente Counter, creato nel primo punto dell'esercizio useState, che stampa il valore corrente del contatore nella console.
// Crea un componente Clock che renderizza l'ora corrente all'interno di un tag h2. Utilizza l'hook useEffect per aggiornare l'orario ogni secondo.

import { useState, useEffect } from "react";

interface CounterProps {
  valoreIniziale: number;
  incremento: number;
  decremento: number;
}

export function Counter({ valoreIniziale, incremento, decremento }: CounterProps) {
  const [counter, setCounter] = useState(valoreIniziale);

  useEffect(() => {
    console.log(`il valore del counter è ${counter}`);
  }, [counter]);

  function setterIncrement() {
    setCounter((c) => c + incremento);
  }

  function setterDecrement() {
    setCounter((c) => c - decremento);
  }

  function setterReset() {
    setCounter(valoreIniziale);
  }

  return (
    <div>
      <CounterDisplay count={counter} />
      <button title="per incremento" onClick={setterIncrement}>
        Incrementa di 1
      </button>
      <button title="per decremento" onClick={setterDecrement}>
        Decrementa di 2
      </button>
      <button type="reset" onClick={setterReset}>
        Reset
      </button>
      <hr />
      <Clock />
    </div>
  );
}

interface DisplayProps {
  count: number;
}

function CounterDisplay({ count }: DisplayProps) {
  return <h2>{count}</h2>;
}

function Clock() {
  const [orario, setOrario] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setOrario(new Date().toLocaleTimeString());
      console.log("Tic-tac...");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("timer pulito");
    };
  }, []);
  return <h2>Ora attuale: {orario}</h2>;
}
