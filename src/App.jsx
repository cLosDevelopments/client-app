import './App.css';
import Header from './Components/Header/Header';
import TaskForm from './Components/TaskFrom/TaskForm';
import TaskList from './Components/TaskList/TaskList';
import FooterForm from './Components/FooterForm/FooterForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-Header-h1">Client Scheduler</h1>
        <Header />
      </header>
      <main>
        <TaskForm />
        <TaskList />
      </main>
      <footer>
        <FooterForm />
      </footer>
    </div>
  );
}

export default App;
