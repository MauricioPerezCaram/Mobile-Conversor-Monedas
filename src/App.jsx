import "./App.css";
import ArgentinoAChileno from "./components/ArgentinoAChileno";
import ChilenoAArgentino from "./components/ChilenoAArgentino";

function App() {
  return (
    <div className="App">
      <h1>Conversor de monedas</h1>
      <ChilenoAArgentino />
      <ArgentinoAChileno />
    </div>
  );
}

export default App;
