import './App.css';
import FormTask from './Components/FormTask/FormTask';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Client Scheduler</h1>
        <p className="getstartedintro">Please Enter Your Busniess Name Below To Get Started.</p>
      </header>
      <main>
        <FormTask />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
