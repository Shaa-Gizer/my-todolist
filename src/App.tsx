import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {AddItemForm} from "./components/TodoList/AddItemForm/AddItemForm";
import {Container, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header/Header";
import {InitStateType, addNewTodo, TasksStateType, TodosType} from "./redux/home-reducer";

export function App() {

    const todos = useSelector((state: InitStateType): TodosType[] => state.todos)
    const tasks = useSelector((state: InitStateType): TasksStateType => state.tasks)
    const dispatch = useDispatch()

    // const [todos, setTodos] = useState<TodosType[]>([])
    // const todoId = v4();
    //
    // const [tasks, setTasks] = useState<TasksStateType>({
    //     [todoId] : []
    // })

    // const addNewTask = (todoId: string, taskTitle: string) => {
    //     setTasks({...tasks, [todoId]: [{taskId: v4(), taskTitle, isDone: false}, ...tasks[todoId]]});
    // }
    // const removeTask = (todoId: string, taskId: string) => {
    //     setTasks({...tasks, [todoId]: tasks[todoId].filter(t => t.taskId !== taskId)});
    // }
    // const setTaskStatus = (todoId: string, taskId: string, isDone: boolean) => {
    //     setTasks({...tasks, [todoId]: tasks[todoId].map(t => t.taskId !== taskId ? t : {...t, isDone})});
    // }
    // const setTodoFilter = (todoId: string, filter: FilterType) => {
    //     setTodos(todos.map(td => td.todoId !== todoId ? td : {...td, filter: filter}));
    // }
    // const deleteTodo = (todoId: string) => {
    //     setTodos(todos.filter(td => td.todoId !== todoId));
    //
    //     delete (tasks[todoId]);
    //     setTasks({...tasks});
    // }
    // const addNewTodo = (newTitle: string) => {
    //     let newTodo: TodosType = {todoId: v4(), todoTitle: newTitle, filter: "all"}
    //     setTodos([newTodo, ...todos]);
    //     setTasks({...tasks, [newTodo.todoId]: []})
    // }
    // const setNewTaskTitleValue = (todoId: string, taskId: string, newTaskTitleValue: string) => {
    //     setTasks({
    //         ...tasks,
    //         [todoId]: tasks[todoId].map(t => t.taskId !== taskId ? t : {...t, taskTitle: newTaskTitleValue})
    //     });
    // }
    // const setNewTodoTitleValue = (todoId: string, newTitleValue: string) => {
    //     setTodos(todos.map(td => td.todoId !== todoId ? td : {...td, todoTitle: newTitleValue}))
    // }

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
            />
        )
    })

    return (
        <div className="App">
            <Header />
            {/*<Container fixed>*/}
            {/*    <Grid container style={{padding: '10px'}}>*/}
            {/*        <AddItemForm addNewItem={(newTitle) => dispatch(addNewTodo(newTitle))}/>*/}
            {/*    </Grid>*/}
            {/*    <Grid container spacing={3}>*/}
            {/*        {todoItems}*/}
            {/*    </Grid>*/}
            {/*</Container>*/}
        </div>
    );
}