import React, {useCallback} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {AddItemForm} from "./components/TodoList/AddItemForm/AddItemForm";
import {Container, Grid} from "@mui/material";
import Header from "./components/Header/Header";
import {FilterType, TodoType} from "./types";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import {
    addNewTodolistAC,
    deleteTodolistAC, setNewTodolistsTitleValueAC,
    setTodolistsFilterValueAC
} from "./redux/reducers/DimychVersion/todolistsReducer";
export function App() {
    console.log('APP')

    const dispatch = useDispatch()
    const todolists = useSelector<RootStateType, TodoType[]>(state => state.todolists)

    const deleteTodolist = useCallback((todoId: string) => {
        dispatch(deleteTodolistAC(todoId))
    }, [dispatch])
    const setTodolistsFilterValue = useCallback((todoId: string, filter: FilterType) => {
        dispatch(setTodolistsFilterValueAC(todoId, filter))
    }, [dispatch])
    const setNewTodolistsTitleValue = useCallback((todoId: string, newTodolistTitleValue: string) => {
        dispatch(setNewTodolistsTitleValueAC(todoId, newTodolistTitleValue))
    }, [dispatch])
    const addNewTodolistItem = useCallback((newTitle: string) => {
        dispatch(addNewTodolistAC(newTitle))
    }, [dispatch])

    const todoItems = Array?.isArray(todolists) ? todolists?.map(td => <TodoList
        key={td.todoId}
        todoId={td.todoId}
        todoTitle={td.todoTitle}
        filter={td.filter}
        deleteTodolist={deleteTodolist}
        setTodolistsFilterValue={setTodolistsFilterValue}
        setNewTodolistsTitleValue={setNewTodolistsTitleValue}
    />) : null;

    return (
        <div className="App">
            <Header />
            <Container fixed>
                <Grid container style={{padding: '10px'}}
                      className={'aif'}>
                    <AddItemForm addNewItem={addNewTodolistItem}/>
                </Grid>
                <Grid container spacing={3}>
                    {todoItems}
                </Grid>
            </Container>
        </div>
    );
}