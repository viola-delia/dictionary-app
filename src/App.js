import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header"><span className="dictionary-heading">Dictionary</span>

<footer className="App-footer"><small>Coded by Viola D'Elia</small></footer>
      </header>
      <main>
        <Dictionary defaultKeyword="yoga"/>
        </main>
    </div></div>
  );
}

