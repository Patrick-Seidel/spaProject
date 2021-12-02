import './App.scss';
import Header from './components/Header'
import Todoinput from './components/Todoinput.js'
import Todolist from './components/Todolist.js'
import Todolist2 from './components/Todolist2.js'




function App() {
  const addTodo = (name) => {
   
  
  };
  return (
    <div className="App">
   
    <Header />
    <h1>My ToDo list</h1>
    <Todoinput text="Fertig"
          onButton={addTodo} />
    <h3>Todo</h3>
    <Todolist />
    <h3>TestErledigt</h3>
    <Todolist2 />
    </div>
  );
}

export default App;
 