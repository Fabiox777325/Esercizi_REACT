// Crea un componente InteractiveWelcome che renderizza un tag input e il componente Welcome. Passa il contenuto corrente del tag input alla prop name del componente Welcome. Il tag input dovrebbe essere un componente controllato.

// Crea un componente Login contenente tre input: un input per il username, un input per la password e una checkbox per remember. Tutti e tre gli input dovrebbero essere componenti controllati.

// Aggiungi un pulsante "login" al componente Login. Questo pulsante dovrebbe essere disabilitato finché gli input username e password sono vuoti. Quando cliccato, il gestore di eventi allegato al pulsante dovrebbe chiamare una funzione onLogin passata come prop al componente Login, passando lo stato.

// Aggiungi un pulsante "reset" al componente Login che cancella il contenuto di tutti e tre gli input quando cliccato.

import { useState, type BaseSyntheticEvent } from "react";

export function InteractiveWelcome() {
  return (
    <>
      <Welcome />
      <Login />
    </>
  );
}

function Welcome() {
  const [name, setName] = useState("");
  function welcomeName(event: BaseSyntheticEvent) {
    const name = event.target;
    setName(name.value);
  }
  return (
    <div>
      <h1>{`Benvenuto/a gentile ${name}!`}</h1>;
      <label htmlFor="name">
        Inserisci il tuo Nome:
        <input type="text" name="name" value={name} onChange={welcomeName} />
      </label>
    </div>
  );
}

function Login() {
  const [data, setData] = useState({ username: "", password: "", remember: false });

  function onLogin(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    const valoreDaSalvare = type === "checkbox" ? checked : value;
    setData((data) => {
      return { ...data, [name]: value, [name]: valoreDaSalvare };
    });
  }
  function reset() {
    setData({ username: "", password: "", remember: false });
  }
  function handleLogin(data: BaseSyntheticEvent) {}

  return (
    <>
      <form>
        <div>
          <label htmlFor="username">
            Nome:
            <input name="username" value={data.username} type="text" onChange={onLogin} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input name="password" value={data.password} type="password" onChange={onLogin} />
          </label>
        </div>
        <input
          type="checkbox"
          name="remember"
          id="checkbox"
          title="checkbox"
          checked={data.remember}
          onChange={onLogin}
        />
        Remember
        <button
          title="submit"
          type="submit"
          disabled={!data.username || !data.password}
          onClick={handleLogin}
        >
          Login
        </button>
        <button type="button" title="reset" onClick={reset}>
          Reset
        </button>
      </form>
    </>
  );
}
