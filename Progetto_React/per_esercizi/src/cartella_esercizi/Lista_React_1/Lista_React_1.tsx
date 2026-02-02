// Crea un componente Colors che rende un tag ul con un tag li per ogni colore passato negli oggetti di scena. La prop items dovrebbe essere un array di stringhe.
// Modifica il componente Colors in modo che gli elementi si aspetti siano un array di oggetti, ciascuno contenente una proprietà id e una proprietà name. Renderizza la proprietà name di ogni oggetto all'interno di un tag li e usa l'id come chiave.
// Estrai il tag li in un nuovo componente chiamato Color e renderizzalo all'interno del componente Colors.

import { useEffect } from "react";

export function Lista_React_1() {
  return (
    <>
      <Colors
        items={[
          { id: 1, name: "rosso" },
          { id: 2, name: "blue" },
          { id: 3, name: "rosa" },
          { id: 4, name: "giallo" },
        ]}
      />
    </>
  );
}

interface ColorsProp {
  items: ColorItem[];
}

interface ColorItem {
  name: string;
  id: number;
}

function Colors({ items }: ColorsProp) {
  useEffect(() => {
    console.log("log da useEffect");
    items.forEach((item, index) => {
      console.log(`indice: ${index} id: ${item.id} colore: ${item.name}`);
    });
    console.table(items);
  }, [items]);
  return (
    <ul>
      {items.map((item) => (
        <Color key={item.id} name={item.name} />
      ))}
    </ul>
  );
}

function Color({ name }: { name: string }) {
  return <li>{name}</li>;
}
