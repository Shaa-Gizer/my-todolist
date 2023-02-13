import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import {TasksStateType, TodosType} from "./redux/home-reducer";
import {v4} from "uuid";

function App() {

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
        setTasks({...tasks, [todoId] : [{taskId: v4(), taskTitle, isDone: false}, ...tasks[todoId]]})
    }

    const removeTask = (todoId: string, taskId: string) => {
        setTasks({...tasks, [todoId] : tasks[todoId].filter(t => t.taskId !== taskId)})
    }

    const todoItems = todos.map(t =>
        <TodoList
            key={t.todoId}
            todoId={t.todoId}
            todos={t}
            tasks={tasks[t.todoId]}
            addNewTask={addNewTask}
            removeTask={removeTask}
        />)

    return (
        <div className="App">
            {todoItems}
        </div>
    );
}

export default App;
