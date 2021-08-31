import "./App.css";
import Profile from "./components/Developer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <Profile name="Dev: Blanka" age="Idade: 50" country="País: Brasil" />
        </div>
        <div className="App-logo">
          <Profile name="Dev: Ryu" age="Idade: 32" country="País: Japão" />
        </div>
        <div className="App-logo">
          <Profile name="Dev: Chun-Li" age="Idade: 25" country="País: China" />
        </div>
        <div className="App-logo">
          <Profile
            name="Dev: Sagat"
            age="Idade: 45"
            country="País: Tailândia"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
