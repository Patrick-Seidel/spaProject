import './App.scss';
import Header from './components/Header'
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'

function App() {
  return (
    <div className="App">
    <Header />
    <Todoinput />
    <h3>Todo</h3>
    <Todolist />
    <h3>Erledigt</h3>
    <Todolist />
    </div>
  );
}

export default App;
