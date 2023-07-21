import React from 'react'
import {Provider} from "react-redux";
import {RootStateType, store} from "./store";
import {combineReducers, createStore, legacy_createStore} from "redux";
import { tasksReducer } from './reducers/tasksReducer';
import {todolistsReducer} from "./reducers/todolistsReducer";
import {v1} from "uuid";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

const initialGlobalState = {
    todolists: [
        {todoId: "todolistId1", todoTitle: "What to learn", filter: "all"},
        {todoId: "todolistId2", todoTitle: "What to buy", filter: "all"}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {taskId: v1(), taskTitle: "HTML&CSS", isDone: true},
            {taskId: v1(), taskTitle: "JS", isDone: false}
        ],
        ["todolistId2"]: [
            {taskId: v1(), taskTitle: "Milk", isDone: false},
            {taskId: v1(), taskTitle: "React Book", isDone: true}
        ]
    }
};

export const storyBookStore = legacy_createStore(rootReducer, initialGlobalState as RootStateType);


export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}
