import "./Todo.css"
import {useDispatch} from 'react-redux';
import {deleteTodo, toggleTodo} from '../Redux/actions';


export const Todo = ({todo}) => {

    const dispatch = useDispatch();

    const handleCheked = () => dispatch(toggleTodo(todo.id));

    return (
        <div>
            <div className="item-todo">
                <div className="container_content">
                    <form className="item-todo__check">
                        <input className="input-check" onChange={handleCheked} checked={todo.completed}
                               id="checkbox"
                               type="checkbox">
                        </input>
                    </form>
                    <label className={`task-item ${todo.completed ? "completed" : ""}`}>
                        {todo.content}
                    </label>
                </div>
                <label className="item-delete"
                       onClick={() => dispatch(deleteTodo(todo.id))}>
                    ✖
                </label>
            </div>
        </div>
    )
}