import {VISIBILITY_FILTER} from "../contants";
import {createSelector} from "reselect";

const todos = (state) => state.todos;
const visibilityFilter = (state) => state.visibilityFilter;


export const getTodosByVisibilityFilter = createSelector(
    [todos, visibilityFilter],
    (store, visibilityFilter) => {
        switch (visibilityFilter) {
            case VISIBILITY_FILTER.COMPLETED:
                return store.todos.filter(todo => todo.completed);
            case VISIBILITY_FILTER.ACTIVE:
                return store.todos.filter(todo => !todo.completed);
            default:
                return store.todos;
        }
    }
)

export const getCountNumber = createSelector([todos, visibilityFilter], (store, visibilityFilter) => {
        switch (visibilityFilter) {
            case VISIBILITY_FILTER.COMPLETED:
                return store.todos.filter(todo => todo.completed).length;
            case VISIBILITY_FILTER.ACTIVE:
                return store.todos.filter(todo => !todo.completed).length;
            default:
                return store.todos.length;
        }
    }
)