import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <Movie title="Alien" year="1982" description="Scarry!!!" />
      <Movie
        title="Back to the Future"
        year="1985"
        description="Great movie!"
      />
    </div>
  );
}

export default App;
