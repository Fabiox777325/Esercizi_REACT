// Crea un componente FocusableInput che renderizza un tag input. Non appena il componente viene renderizzato, il tag input dovrebbe essere automaticamente messo a fuoco.
// Utilizzando StrictMode, crea un componente con un effetto che stampa un messaggio solo quando il componente è montato per la prima volta. Usa un ref per tenere traccia se il componente è montato o meno.
// Modifica il componente Counter in modo che ogni volta che il valore del contatore cambia, il valore di un ref venga aggiornato per contenere la direzione del cambiamento (cioè "up" o "down") rispetto alla prop partialValue. Stampa il valore del ref nella console solo quando è diverso dal valore precedente.

import { useEffect, useRef, useState } from "react";

export function FocusableInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      console.log(inputRef.current);
      inputRef.current.focus(); // approccio più sicuro per stampare se presente e se non, non dia errori
    }
  }, []);
  return (
    <>
      <form>
        <label htmlFor="name">Nome:</label>
        <input type="text" ref={inputRef} title="name" name="name" />
      </form>
      <Counter increment={1} decrement={1} initialValue={0} />
      <MountMessage />
    </>
  );
}

interface CounterProps {
  initialValue: number;
  increment: number;
  decrement: number;
}

function Counter({ initialValue, increment, decrement }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef<string>("");
  const lastLoggedDirection = useRef<string>("");

  useEffect(() => {
    if (counter > initialValue) {
      directionRef.current = "up";
    } else if (counter < initialValue) {
      directionRef.current = "down";
    }

    if (directionRef.current !== lastLoggedDirection.current) {
      console.log("direzione cambiata in:", directionRef.current);
      lastLoggedDirection.current = directionRef.current;
    }
  }, [counter, initialValue]);

  function counterIncrement() {
    setCounter((c) => c + increment);
  }
  function counterDecrement() {
    setCounter((c) => c - decrement);
  }
  return (
    <>
      <h4>{counter}</h4>
      <button title="per incremento" onClick={counterIncrement}>
        +{increment}
      </button>
      <button title="per decremento" onClick={counterDecrement}>
        -{decrement}
      </button>
    </>
  );
}

function MountMessage() {
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      console.log("componente montato per la prima volta!");
      isMountedRef.current = true;
    }
  }, []);
  return <p>controlla la console per il messaggio di montaggio</p>;
}
