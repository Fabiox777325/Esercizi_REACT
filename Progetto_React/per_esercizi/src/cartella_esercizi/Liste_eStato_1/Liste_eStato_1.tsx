// Crea un componente TodoList che renderizza un tag ul con un tag li per ogni elemento contenuto nella variabile di stato items. La variabile di stato items dovrebbe essere un array di stringhe. Il componente TodoList dovrebbe anche contenere un tag input e un button. Quando il button viene cliccato, l'event handler dovrebbe aggiungere il valore del tag input all'array items.

import { useState, type BaseSyntheticEvent } from "react";

// Modifica il componente TodoList in modo che l'input venga svuotato ogni volta che un Todo viene aggiunto all'array items.

// Modifica il componente TodoList aggiungendo un button "reset" che svuota l'array items quando cliccato.

// Modifica il componente TodoList aggiungendo un button "remove" a ogni tag li. Quando cliccato, l'event handler dovrebbe rimuovere l'elemento corrispondente dell'array items.

export function Lista_eStato_1() {
  return (
    <>
      <TodoList />
    </>
  );
}

function TodoList() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  function valoreTextInput(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function salveValorInput() {
    if (text.trim() !== "") {
      setItems([...items, text]);
      setText("");
    }
  }

  function removeItem(indexDaRimuovere: number) {
    const nuoviItem = items.filter((_, indexCorrente) => indexCorrente !== indexDaRimuovere);
    setItems(nuoviItem);
  }

  return (
    <>
      <form action="text">
        <input
          type="text"
          name="items"
          id="text"
          title="text"
          value={text}
          onChange={valoreTextInput}
        />
        <button type="button" title="button" onClick={salveValorInput}>
          Salva
        </button>
        <button type="button" title="reset" onClick={() => setItems([])}>
          Reset
        </button>
      </form>
      <ul>
        {items.map((item: string, index) => (
          <li key={index}>
            {item}
            <button type="button" onClick={() => removeItem(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
