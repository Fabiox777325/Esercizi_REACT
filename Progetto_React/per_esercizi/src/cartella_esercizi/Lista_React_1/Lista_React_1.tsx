// Crea un componente Colors che rende un tag ul con un tag li per ogni colore passato negli oggetti di scena. La prop items dovrebbe essere un array di stringhe.
// Modifica il componente Colors in modo che gli elementi si aspetti siano un array di oggetti, ciascuno contenente una proprietà id e una proprietà name. Renderizza la proprietà name di ogni oggetto all'interno di un tag li e usa l'id come chiave.
// Estrai il tag li in un nuovo componente chiamato Color e renderizzalo all'interno del componente Colors.

import { useEffect } from "react";

export function Lista_React_1() {
  return (
    <>
      <Colors items={["kate", "josh", "juan", "pablo"]} />
    </>
  );
}

interface ColorsProp {
  items: string[];
}

function Colors({ items }: ColorsProp) {
  useEffect(() => {
    console.log("log da useEffect");
    items.forEach((item, index) => {
      console.log(`id: ${index} name ${item}`);
    });
  }, [items]);
  useEffect(() => {
    console.log("log completo: " + items.join(" "));
  }, []);
  return (
    <ul>
      {items.map((item, index) => {
        return <Color key={index} color={item} />;
      })}
    </ul>
  );
}

function Color({ color }: { color: string }) {
  return <li>{color}</li>;
}
