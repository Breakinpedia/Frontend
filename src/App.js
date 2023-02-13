import logo from './Images/logo.svg';
import wind from './Images/wind.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-loadblock">
          <img src={wind} className="App-load" alt="wind" />
        </div>
    {/* Deutsch */}
        <div className="DEmain">
          <a
            className="App-link"
            href="http://www.wikipedia.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deutsch
          </a>
        </div>
    {/* English */}     
        <div className="ENmain">
          <a
            className="App-link"
            href="http://www.wikipedia.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            English
          </a>
        </div>
    {/* Português */}     
        <div className="PTmain">
          <a
            className="App-link"
            href="http://www.wikipedia.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Português
          </a>
        </div>
    {/* Japanese */}
        <div className="JPmain">
          <a
            className="App-link"
            href="http://www.wikipedia.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Japanese
          </a>
        </div>
    {/* Español */}
        <div className="SPmain">
          <a
            className="App-link"
            href="http://www.wikipedia.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Español
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
