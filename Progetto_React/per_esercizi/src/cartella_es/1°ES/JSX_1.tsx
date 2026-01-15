// Crea una variabile chiamata hello e inizializzala con un tag h1 con il messaggio "Hello, World!".
// Scrivi una funzione che riceve un argomento name e restituisce un tag h1 con la variabile name aggiunta alla stringa "Hello, ".
// Cosa succede se la variabile name non viene passata alla funzione?
// Cosa succede se la variabile name contiene un'espressione JSX invece di una stringa?
// Scrivi una funzione che riceve due parametri, a e b, e restituisce la loro somma all'interno di un tag h2

const hello = <h1>Hello, World!</h1>;

function fun(name: string | any) {
  return <p>Hello, {name}</p>;
}
// Se la variabile name non viene passata alla funzione, il risultato sarà "Hello, undefined" undefined viene trasformato in stringa quindi senza alcun nome aggiunto.
// Se la variabile name contiene un'espressione JSX, questa verrà renderizzata correttamente all'interno del tag h1.

function mySum(a: number, b: number) {
  return <h2>{a + b}</h2>;
}

fun(<strong>John</strong>);
mySum(5, 2);

export function JSX_1() {
  return (
    <div>
      {hello},{fun(<strong>John</strong>)},{mySum(5, 2)}
    </div>
  );
}

// Ad esempio, se chiamiamo fun(<strong>John</strong>), il risultato sarà "Hello, John" con "John" in grassetto.
