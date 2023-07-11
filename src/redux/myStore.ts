import {combineReducers, createStore} from "redux";
import {todosReducer} from "./reducers/todosReducer";
import {tasksReducer} from "./reducers/tasksReducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    tasks: tasksReducer
})

export const myStore = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>