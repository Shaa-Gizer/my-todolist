import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./reducers/DimychVersion/todolistsReducer";
import {tasksReducer} from "./reducers/DimychVersion/tasksReducer";

const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;