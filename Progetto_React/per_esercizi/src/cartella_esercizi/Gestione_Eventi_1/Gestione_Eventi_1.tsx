// Crea un componente MouseClicker che contenga un pulsante con il nome dell'oggetto impostato alla stringa "one". Aggiungi un gestore di eventi al pulsante che stampa il nome dell'oggetto nella console quando fai clic, leggendo la proprietà event.target.name.

// Aggiungi un'immagine all'interno del pulsante e, senza creare un nuovo gestore di eventi o allegare un gestore di eventi all'immagine, stampa l'attributo nome del pulsante indipendentemente dal fatto che si clicchi sul pulsante o sull'immagine.

// Aggiungi un gestore di eventi suClick all'immagine che stampa il src dell'immagine nella console. L'attributo nome del pulsante viene comunque stampato nella console quando si clicca sull'immagine? Perché?

// Come puoi impedire che l'attributo nome del pulsante venga stampato nella console quando si clicca sull'immagine?

// Crea un componente MultiButton con tre pulsanti, ciascuno con il nome dell'elica impostato rispettivamente a "uno", "due" e "tre". Aggiungi lo stesso gestore di eventi a ciascun pulsante che stampa il nome dell'oggetto nella console quando fai clic, leggendo la proprietà event.target.name.

import type { BaseSyntheticEvent } from "react";

export function MouseClicker() {
  function handleButtonClick(event: BaseSyntheticEvent) {
    console.log(event.target.name);
  }

  function handleImageClick(event: BaseSyntheticEvent) {
    event.stopPropagation();
    console.log(event.target.src);
  }

  return (
    <div>
      <button title="pulsante" name="one" onClick={handleButtonClick}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Cd27rejpmol_DfDNpf8_SURYogLCadA-TQ&s"
          width={200}
          height={200}
          alt="immagine di incoraggiamento"
          onClick={handleImageClick}
        />
        CLICCAMI
      </button>
      <MultiButton />
    </div>
  );
}

function MultiButton() {
  function handleButtonClick2(event: BaseSyntheticEvent) {
    console.log(event.currentTarget.name);
  }

  return (
    <div>
      <button title="button" name="one" onClick={handleButtonClick2}>
        CLICCAMI{" "}
      </button>
      <button title="button" name="two" onClick={handleButtonClick2}>
        CLICCAMI
      </button>
      <button title="button" name="three" onClick={handleButtonClick2}>
        CLICCAMI
      </button>
    </div>
  );
}
