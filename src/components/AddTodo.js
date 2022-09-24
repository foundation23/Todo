import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions";
import './AddTodo.css'

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue('');
    }

    const handleInput = e => {
        setValue(e.target.value);
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form className="form"
              onSubmit={handleSubmit}>
            <input className="input"
                   value={value}
                   type="text"
                   onChange={handleInput}
                   onKeyDown={handleKeyPress}
                   placeholder="What needs to be done?"/>
        </form>
    )
}
