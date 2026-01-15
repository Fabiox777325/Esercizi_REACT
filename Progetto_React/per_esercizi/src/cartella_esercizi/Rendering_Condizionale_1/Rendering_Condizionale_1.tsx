// In un'applicazione React, crea una funzione componente Welcome che riceve una prop name e una prop age.
// Crea un componente Age che riceve una prop age.
// Il componente Welcome deve visualizzare un messaggio "Benvenuto, {nome}!" all'interno di un tag <p>e 5 componenti Age. Per ogni rendering del componente Age, utilizzare il rendering condizionale con una delle seguenti condizioni:
// Il componente Age viene reso solo se la prop age è maggiore di 18.
// Il componente Age viene reso solo se la prop age è presente.
// Il componente Age viene reso reso solo se la prop age è maggiore di 18 e minore di 65.
// Il componente Age viene reso reso solo se la prop age è maggiore di 18 e la prop name è uguale a "John".
// Crea un nuovo componente Message che riceve una prop agee visualizza lo stesso messaggio se la prop è maggiore di 18; in caso contrario, visualizza il messaggio "Sei molto giovane!". Renderizza il componente Message all'interno del componente Welcome.

export function Rendering_Condizionale_1() {
  return (
    <div>
      <Welcome name="John" age={59} />
    </div>
  );
}

type Utente = {
  name: string;
  age?: number;
};

function Welcome({ name = "Utente", age }: Utente) {
  return (
    <div>
      <p>Benvenuto, {name}</p>
      {age !== undefined && age > 18 && <Age age={age} />}
      {age !== undefined && <Age age={age} />}
      {age !== undefined && age > 18 && age < 65 && <Age age={age} />}
      {age !== undefined && age > 18 && name === "John" && <Age age={age} />}
      {<Message age={age || 0} />}
    </div>
  );
}
type AgeProps = {
  age: number;
};

function Age({ age }: AgeProps) {
  return <p>La tua età è {age}</p>;
}

function Message({ age }: AgeProps) {
  return <p>{age > 18 ? `Sei maggiorenne ${age}` : "Sei molto giovane!"}</p>;
}
