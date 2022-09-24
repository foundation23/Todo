import {useSelector} from "react-redux";
import {getTodosByVisibilityFilter} from "../Redux/selector";
import {Todo} from "./Todo";
import {VisibilityFilter} from "./VisibilityFilter";
import {ChakraProvider} from "@chakra-ui/react";

export const TodoList = () => {
    const filterTodos = useSelector(getTodosByVisibilityFilter);
    return (
        <div>
            {filterTodos.map(todo => (
                <Todo key={`todo-${todo.id}`} todo={todo}/>
            ))}
            <ChakraProvider>
                <VisibilityFilter/>
            </ChakraProvider>
        </div>
    )
}