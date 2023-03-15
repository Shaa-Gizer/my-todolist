import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {AddItemForm} from "./components/TodoList/AddItemForm/AddItemForm";
import {Container, Grid} from "@mui/material";
import {useDispatch} from "react-redux";
import Header from "./components/Header/Header";
import {addNewTodo} from "./redux/reducers/todosReducer";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {filteredTasks} from "./helpers";

export function App() {

    const todos = useTypedSelector(state => state.todos.todos)
    const tasks = useTypedSelector(state => state.tasks.tasks)
    const dispatch = useDispatch()

    const todoItems = Array.isArray(todos) ? todos?.map(td => <TodoList
        key={td.todoId}
        todoId={td.todoId}
        todos={td}
        tasks={filteredTasks(tasks, td)}/>) : null;

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