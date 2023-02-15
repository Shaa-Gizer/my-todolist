import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {AddItemForm} from "./components/TodoList/AddItemForm/AddItemForm";
import {FilterType, TasksStateType, TodosType} from "./redux/home-reducer";
import {v4} from "uuid";

export function App() {

    const todoId1 = v4();
    const todoId2 = v4();
    const todoId3 = v4();

    const [todos, setTodos] = useState<TodosType[]>([
        {todoId: todoId1, todoTitle: 'Learn', filter: 'all'},
        {todoId: todoId2, todoTitle: 'Work', filter: 'all'},
        {todoId: todoId3, todoTitle: 'Study', filter: 'all'}
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [todoId1]:
            [
                {taskId: v4(), taskTitle: 'HTML & CSS', isDone: true},
                {taskId: v4(), taskTitle: 'JavaScript', isDone: true},
                {taskId: v4(), taskTitle: 'React', isDone: false},
                {taskId: v4(), taskTitle: 'Redux', isDone: false},
                {taskId: v4(), taskTitle: 'GitBush', isDone: true}
            ],
        [todoId2]:
            [
                {taskId: v4(), taskTitle: 'Clothing store', isDone: false},
                {taskId: v4(), taskTitle: 'Weather', isDone: false},
                {taskId: v4(), taskTitle: 'Pizza', isDone: false},
                {taskId: v4(), taskTitle: 'Interactive', isDone: false}
            ],
        [todoId3]:
            [
                {taskId: v4(), taskTitle: 'Redux', isDone: false},
                {taskId: v4(), taskTitle: 'React', isDone: true},
                {taskId: v4(), taskTitle: 'something', isDone: true}
            ]
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
        setTasks({...tasks, [newTodo.todoId] : []})
    }
    const setNewTaskTitleValue = (todoId: string, taskId: string, newTaskTitleValue: string) => {
        setTasks({...tasks, [todoId]: tasks[todoId].map(t => t.taskId !== taskId ? t : {...t, taskTitle: newTaskTitleValue})});
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
            <AddItemForm addNewItem={addNewTodo}/>
            {todoItems}
        </div>
    );
}