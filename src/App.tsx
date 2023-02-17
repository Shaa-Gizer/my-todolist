import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {AddItemForm} from "./components/TodoList/AddItemForm/AddItemForm";
import {FilterType, TasksStateType, TodosType} from "./redux/home-reducer";
import {v4} from "uuid";
import {AppBar, Button, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";

export function App() {

    const todoId1 = v4();
    const todoId2 = v4();
    const todoId3 = v4();

    const [todos, setTodos] = useState<TodosType[]>([])
    const todoId = v4();

    const [tasks, setTasks] = useState<TasksStateType>({
        [todoId] : []
    })

    const addNewTask = (todoId: string, taskTitle: string) => {
        setTasks({...tasks, [todoId]: [{taskId: v4(), taskTitle, isDone: false}, ...tasks[todoId]]});
    }
    const removeTask = (todoId: string, taskId: string) => {
        setTasks({...tasks, [todoId]: tasks[todoId].filter(t => t.taskId !== taskId)});
    }
    const setTaskStatus = (todoId: string, taskId: string, isDone: boolean) => {
        setTasks({...tasks, [todoId]: tasks[todoId].map(t => t.taskId !== taskId ? t : {...t, isDone})});
    }
    const setTodoFilter = (todoId: string, filter: FilterType) => {
        setTodos(todos.map(td => td.todoId !== todoId ? td : {...td, filter: filter}));
    }
    const deleteTodo = (todoId: string) => {
        setTodos(todos.filter(td => td.todoId !== todoId));

        delete (tasks[todoId]);
        setTasks({...tasks});
    }
    const addNewTodo = (newTitle: string) => {
        let newTodo: TodosType = {todoId: v4(), todoTitle: newTitle, filter: "all"}
        setTodos([newTodo, ...todos]);
        setTasks({...tasks, [newTodo.todoId]: []})
    }
    const setNewTaskTitleValue = (todoId: string, taskId: string, newTaskTitleValue: string) => {
        setTasks({
            ...tasks,
            [todoId]: tasks[todoId].map(t => t.taskId !== taskId ? t : {...t, taskTitle: newTaskTitleValue})
        });
    }
    const setNewTodoTitleValue = (todoId: string, newTitleValue: string) => {
        setTodos(todos.map(td => td.todoId !== todoId ? td : {...td, todoTitle: newTitleValue}))
    }

    const todoItems = todos.map(td => {

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
                addNewTask={addNewTask}
                removeTask={removeTask}
                setTaskStatus={setTaskStatus}
                setTodoFilter={setTodoFilter}
                deleteTodo={deleteTodo}
                setNewTaskTitleValue={setNewTaskTitleValue}
                setNewTodoTitleValue={setNewTodoTitleValue}
            />
        )
    })

    return (
        <div className="App">
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Todolists
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '10px'}}>
                    <AddItemForm addNewItem={addNewTodo}/>
                </Grid>
                <Grid container spacing={3}>
                    {todoItems}
                </Grid>
            </Container>
        </div>
    );
}