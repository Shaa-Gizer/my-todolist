import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {AddItemForm} from "./components/TodoList/AddItemForm/AddItemForm";
import {Container, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header/Header";
import {InitTodosStateType, TodosType} from "./types/todoTypes";
import {InitTasksStateType, TasksStateType} from "./types/taskTypes";
import {addNewTodo} from "./redux/reducers/todosReducer";
import {useTypedSelector} from "./hooks/useTypedSelector";

export function App() {

    const todos = useSelector((state: InitTodosStateType): TodosType[] => state.todos)
    const tasks = useSelector((state: InitTasksStateType): TasksStateType => state.tasks)
    const dispatch = useDispatch()

    const todoItems = Array.isArray(todos) ? todos?.map(td => {

        let filteredTasks;
        switch (td.filter) {
            case "active":
                filteredTasks = tasks[td.todoId].filter(t => !t.isDone);
                break;
            case "completed":
                filteredTasks = tasks[td.todoId].filter(t => t.isDone);
                break;
            default:
                filteredTasks = tasks[td.todoId];
        }

        return (
            <TodoList
                key={td.todoId}
                todoId={td.todoId}
                todos={td}
                tasks={filteredTasks}
            />
        )
    }) : null

    return (
        <div className="App">
            <Header />
            <Container fixed>
                <Grid container style={{padding: '10px'}}>
                    <AddItemForm addNewItem={(newTitle) => dispatch(addNewTodo(newTitle))}/>
                </Grid>
                <Grid container spacing={3}>
                    {todoItems}
                </Grid>
            </Container>
        </div>
    );
}