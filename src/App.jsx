import './App.css';
import Header from './Components/Header/Header';
import TaskForm from './Components/TaskFrom/TaskForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="App-Header-h1">Client Scheduler</h1>
        <Header />
      </header>
      <main>
        <TaskForm />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
