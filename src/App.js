import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
      </header>
      
      <div id="container">
        <div className="box text point">hello this is a message</div>​

        <div className="color text point">hello</div>

        <div className="box text point">yuppie</div>
      </div>

      <footer className="footer">
        <input className="text-input" />
        <button className="send">↑</button>
      </footer>
    </div>
  );
}

export default App;
