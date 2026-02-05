// Crea un componente GithubUser che riceve un nome utente prop e recupera i dati dell'utente corrispondenti dalla Github API. Il componente dovrebbe rendere il nome dell'utente, il login e l'avatar.

// Crea un componente GithubUsers che recupera una lista di utenti dalla Github API e renderizza la lista dei nomi utente come un elenco. Quando un nome utente viene cliccato, il componente GithubUser dovrebbe essere renderizzato, passando il nome utente come prop.

import { useEffect, useState } from "react";

export function Recupero_Dati_1() {
  return (
    <>
      <GithubUsers />
    </>
  );
}
type GithubUserProps = {
  username: string;
};

type User = {
  name: string;
  login: string;
  avatar_url: string;
  id: number;
  bio: string;
};
function GithubUser({ username }: GithubUserProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setUser(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username]);

  if (!user) return null;
  return (
    <>
      <h2>{!user && "Loading..."}</h2>
      <h1>{user?.name}</h1>
      <p>{user?.login}</p>
      <img src={user?.avatar_url} title="immagine avatar" />
      <p>{user.bio}</p>
    </>
  );
}

function GithubUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleClick(username: string) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleClick(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
      {user && <GithubUser username={user.login} />}
    </>
  );
}
