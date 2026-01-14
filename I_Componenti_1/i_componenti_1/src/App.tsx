export function App() {
  return (
    <div>
      <Hello />
      <h1>
        {/* si, puoi ripetere più di una volta il componente Hello dentro App, perché ogni componente è un blocco riutilizzabile singolo. Se lo applico tre volte dentro il div di App, vedrò il messaggio composto tre volte nella pagina, ogni istanza è indipendente */}
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
      {/* si, si può renderizzare il componente Message direttamente dentro il componente App, perché Message è un componente autonomo e react ti permette di comporre l'interfaccia come preferisci, es.  permettendoti di essere figlio di Hello o di App, o di entrambi contemporaneamente. Se lo applico vedrò il messaggio composto dentro il suo genitore div di Hello */}
      <Message />
    </div>
  );
}

function Message() {
  return <p>What a beautiful day!</p>;
}
