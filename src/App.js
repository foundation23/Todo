import './App.css';
import {AddTodo} from './components/AddTodo';
import {TodoList} from './components/TodoList';

function App() {


    return (
        <div className="App">
            <div className="app-header">
                <h1>todos</h1>
            </div>
            <div className="form-task form">
                <AddTodo/>
                <TodoList/>

            </div>
        </div>
    )
}

export default App;