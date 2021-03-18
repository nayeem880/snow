import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to kallada academy
        </h1>
        <h3 className="intro-text">Login to start working</h3>
        <form action="POST">
          <label htmlFor="email"></label>
          <input type="email" className="email" placeholder="Email"/>
          <label htmlFor="password"></label>
          <input type="password" className="password" placeholder="Password"/>
          <button>Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
