import './App.css';

function App() {
  const a = 2
  const b = 4

  return (
    <div className="App">
      <h1>Titulo</h1>
      <strong>Trabajo</strong>
      <div>
        <p>El resultado es:</p>
        {a +b }
      </div>
    </div>
  );
}

export default App;