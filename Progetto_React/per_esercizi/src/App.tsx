import { Counter } from "./cartella_esercizi/Stato_Uso_1/Stato_Uso_1";

export function App() {
  return (
    <div>
      <h1>Inserisco nome componente Es. per la visualizzazione dell'Esercizio :)</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Cd27rejpmol_DfDNpf8_SURYogLCadA-TQ&s"
        width={200}
        height={200}
        alt="immagine di incoraggiamento"
      />
      <Counter valoreIniziale={0} incremento={1} decremento={2} />
    </div>
  );
}
