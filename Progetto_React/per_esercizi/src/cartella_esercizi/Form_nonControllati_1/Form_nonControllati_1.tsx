// Implementa un componente UncontrolledLogin che implementa tutte le operazioni del componente Login, ma utilizzando componenti non controllati.
// Accedi ai valori del modulo utilizzando l'API FormData. Stampa i valori del modulo nella console quando il pulsante "login" viene cliccato.

import type { BaseSyntheticEvent } from "react";

export function UncontrolledLogin() {
  function dataSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ name, email, password });
  }
  return (
    <form onSubmit={dataSubmit}>
      <label htmlFor="name">
        Name:
        <input type="name" name="name" />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit" name="submit" title="submit">
        Login
      </button>
    </form>
  );
}
