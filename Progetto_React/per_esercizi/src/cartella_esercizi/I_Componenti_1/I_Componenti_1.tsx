// Esercizio
// I componenti

// Crea una nuova applicazione React con vite e rimuovi tutto il codice all'interno della cartella src.

// Scrivi un componente funzione Hello che renderizza il messaggio "Hello, World!" all'interno di un tag h2.

// Scrivi un componente funzione chiamato App che renderizza il componente Hello all'interno di un tag div.

// Crea un nuovo file main.tsx all'interno della cartella src e renderizza il componente App usando la funzione createRoot e il metodo render sull'oggetto radice creato.

// Avvia l'applicazione con il comando npm run dev e apri l'applicazione nel tuo browser.

// Modifica il componente Hello in modo che mostri un tag p sotto il tag h2 con il messaggio "What a beautiful day!".

// Estrai il messaggio "What a beautiful day!" in un nuovo componente chiamato Message e renderizzalo all'interno del componente Hello.

// Puoi utilizzare il componente Hello più di una volta nel componente App? Cosa succede se lo fai?

// Puoi renderizzare il componente Message direttamente all'interno del componente App? Cosa succede se lo fai?

export function I_Componenti_1() {
  return (
    <div>
      <Hello />
      <h1>
        {/* si, puoi ripetere più di una volta il componente Hello dentro I_Componenti_1, perché ogni componente è un blocco riutilizzabile singolo. Se lo applico tre volte dentro il div di App, vedrò il messaggio composto tre volte nella pagina, ogni istanza è indipendente */}
        <Hello />
        <Hello />
        <Hello />
      </h1>
    </div>
  );
}

function Hello() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <p>What a beautiful day!</p>
      {/* si, si può renderizzare il componente Message direttamente dentro il componente I_Componenti_1, perché Message è un componente autonomo e react ti permette di comporre l'interfaccia come preferisci, es.  permettendoti di essere figlio di Hello o di App, o di entrambi contemporaneamente. Se lo applico vedrò il messaggio composto dentro il suo genitore div di Hello */}
      <Message />
    </div>
  );
}

function Message() {
  return <p>What a beautiful day!</p>;
}
