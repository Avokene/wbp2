import './App.css';
import Home from './page/Home.js'

function App() {
  return (
    <div className="App">
      <header className="App-headerTop">
        <text>포커 손나 잘치는법</text>
      </header>
      <header className="App-header">
        <text className="Header-text">World Best Poker 2</text>
      </header>
      <body className="App-body">
        <Home />
      </body>
    </div>
  );
}

export default App;
