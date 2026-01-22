// Crea un componente funzione Counter e crea una nuova variabile di stato chiamata counter inizializzata a 0. Il componente Counter dovrebbe rendere il valore di counter all'interno di un tag h2, e il valore di counter dovrebbe essere incrementato di 1 ogni volta che l'utente clicca su un pulsante. Suggerimento: usa l'hook useState;
// Quando si chiama la funzione "setter" per incrementare il contatore, il parametro dovrebbe essere una funzione o un valore immediato? Perché? Scrivi la risposta in un commento.
// Modifica il componente Counter in modo che il valore iniziale del contatore e l'incremento siano passati come props al componente;
// Estrai il tag h2 che mostra la variabile di stato counter in un nuovo componente chiamato CounterDisplay e renderizzalo all'interno del componente Counter, passandogli la variabile di stato count come prop;
// Aggiungi un pulsante per diminuire e un pulsante per ripristinare il componente Contatore. Il pulsante per decrementare dovrebbe decrementare il contatore della quantità passata come prop, e il pulsante per resettare dovrebbe riportare il contatore al valore iniziale passato come prop.

import { useState } from "react";

interface CounterProps {
  valoreIniziale: number;
  incremento: number;
  decremento: number;
}

export function Counter({ valoreIniziale, incremento, decremento }: CounterProps) {
  const [counter, setCounter] = useState(valoreIniziale);

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
    </div>
  );
}

interface DisplayProps {
  count: number;
}

// 2. la funzione "setter" applica l'incremento al parametro c (la callback) e poi lo restituisce come valore alla variabile counter, in modo tale che prenda sempre il valore più aggiornato rendendo la funzione asincrona rendendo il componente responsivo e indipendente, ridisegnando la pagina alla sua variazione

function CounterDisplay({ count }: DisplayProps) {
  return <h2>{count}</h2>;
}
