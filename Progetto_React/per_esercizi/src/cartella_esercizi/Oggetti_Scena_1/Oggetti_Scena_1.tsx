// In un'applicazione React, crea un componente funzionale Welcomeche riceveva una prop namee visualizzava il messaggio "Benvenuto, {nome}!" all'interno di un tag <p>.
// Renderizza questo componente nel componente App, passando una prop namea tua scelta. Imposta un valore predefinito per la prop name.
// Aggiungi una seconda prop chiamata agee visualizzala sotto il messaggio di benvenuto, all'interno di un tag <p>dopo il testo "Your age is " .
// 4 .Modifica il valore passato alla prop namein modo che sia contenuto all'interno di un tag <strong>.
// Estrai il messaggio "La tua età è" in un nuovo componente chiamato Agee rendizzalo all'interno del componente Welcome. Passa al componente Agela prop ageche Welcomesta ricevendo dal componente App.

export function Oggetti_Scena() {
  return (
    <div>
      <Welcome name={<strong>"DottorCuloCane"</strong>} age={7} />
    </div>
  );
}

type WelcomeProps = {
  name?: string | JSX.Element;
  age?: number;
};

function Welcome({ name = "CuloCane", age }: WelcomeProps) {
  return (
    <div>
      <p>Benvenuto, {name}!</p>
      <p>
        Your age is <Age age={age} />
      </p>
    </div>
  );
}

function Age({ age = 7 }: WelcomeProps) {
  return <span>La tua età è {age}</span>;
}
