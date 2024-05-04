import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          This is Anjali's Portfolio website.
        </h2>
        <img src={"/photo1.jpeg"} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/anjalipareek"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Github
        </a>
      </header>
    </div>
  );
}

export default App;
