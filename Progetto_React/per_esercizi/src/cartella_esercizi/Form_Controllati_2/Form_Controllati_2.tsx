// Crea un componente InteractiveWelcome che renderizza un tag input e il componente Welcome. Passa il contenuto corrente del tag input alla prop name del componente Welcome. Il tag input dovrebbe essere un componente controllato.

// Crea un componente Login contenente tre input: un input per il username, un input per la password e una checkbox per remember. Tutti e tre gli input dovrebbero essere componenti controllati.

// Aggiungi un pulsante "login" al componente Login. Questo pulsante dovrebbe essere disabilitato finché gli input username e password sono vuoti. Quando cliccato, il gestore di eventi allegato al pulsante dovrebbe chiamare una funzione onLogin passata come prop al componente Login, passando lo stato.

// Aggiungi un pulsante "reset" al componente Login che cancella il contenuto di tutti e tre gli input quando cliccato.

import { useState, type BaseSyntheticEvent } from "react";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  function welcomeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleLoginSubmit(loginData: any) {
    console.log("Dati inviati:", loginData);
  }

  return (
    <>
      <label htmlFor="name">
        Inserisci il tuo Nome:
        <input type="text" name="name" value={name} onChange={welcomeName} />
      </label>
      <Welcome name={name} />

      <Login onLogin={handleLoginSubmit} />
    </>
  );
}

function Welcome({ name }: { name: string }) {
  return <h1>{`Benvenuto/a gentile ${name === "" ? "ospite" : name}`}</h1>;
}

interface LoginProps {
  onLogin: (data: { username: string; password: string; remember: boolean }) => void;
}

function Login({ onLogin }: LoginProps) {
  const [data, setData] = useState({ username: "", password: "", remember: false });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    setData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleLogin(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    onLogin(data);
  }

  function reset() {
    setData({ username: "", password: "", remember: false });
  }

  return (
    <>
      <form>
        <label htmlFor="username">
          Nome:
          <input
            name="username"
            id="username"
            value={data.username}
            type="text"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            name="password"
            id="password"
            value={data.password}
            type="password"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="remember">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            title="checkbox"
            checked={data.remember}
            onChange={handleChange}
          />
          Remember
        </label>
        <button
          title="button"
          type="button"
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

// import { useState } from "react";

// // --- Componente Welcome ---
// // Riceve la prop 'name' e la visualizza
// function Welcome({ name }: { name: string }) {
//   return <h1>Benvenuto/a, {name || "Ospite"}!</h1>;
// }

// // --- Componente Login ---
// interface LoginProps {
//   onLogin: (data: { username: string; password: string; remember: boolean }) => void;
// }

// function Login({ onLogin }: LoginProps) {
//   const [data, setData] = useState({ username: "", password: "", remember: false });

//   // Gestore universale per gli input
//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value, type, checked } = event.target;
//     setData((prev) => ({
//       ...prev,
//       // Se è una checkbox usiamo 'checked', altrimenti 'value'
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }

//   function handleLogin() {
//     onLogin(data);
//   }

//   function reset() {
//     setData({ username: "", password: "", remember: false });
//   }

//   return (
//     <form style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
//       <h3>Login</h3>
//       <label>
//         Username:
//         <input name="username" value={data.username} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input name="password" type="password" value={data.password} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         <input type="checkbox" name="remember" checked={data.remember} onChange={handleChange} />
//         Ricordami
//       </label>
//       <br />
//       {/* Il pulsante è disabilitato se i campi sono vuoti */}
//       <button type="button" onClick={handleLogin} disabled={!data.username || !data.password}>
//         Login
//       </button>
//       <button type="button" onClick={reset}>
//         Reset
//       </button>
//     </form>
//   );
// }

// // --- Componente Principale InteractiveWelcome ---
// export function InteractiveWelcome() {
//   const [name, setName] = useState("");

//   // Gestore per l'input del nome
//   function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setName(event.target.value);
//   }

//   // Funzione di esempio per gestire il login
//   const handleLoginSubmit = (loginData: any) => {
//     console.log("Dati inviati:", loginData);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <label htmlFor="name">Inserisci il tuo Nome: </label>
//       <input id="name" type="text" value={name} onChange={handleNameChange} />

//       <Welcome name={name} />

//       <Login onLogin={handleLoginSubmit} />
//     </div>
//   );
// }
