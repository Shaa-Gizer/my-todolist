import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import td from './TodoList.module.css'
import {TasksType, TodosType} from "../../redux/home-reducer";
import Tasks from "./Tasks/Tasks";

type TodosPropsType = {
    todoId: string,
    todos: TodosType,
    tasks: TasksType[],
    addNewTask: (todoId: string, taskTitle: string) => void,
    removeTask: (todoId: string, taskId: string) => void
}

const TodoList: React.FC<TodosPropsType> = (props) => {

    const [newTaskTitle, setNewTaskTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onChangeSetNewTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onClickAddNewTask = () => {
        newTaskTitle ? props.addNewTask(props.todos.todoId, newTaskTitle) : setError(true)
    }
    const onKeyDownAddNewTask = (e : KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && newTaskTitle ?
            props.addNewTask(props.todos.todoId, newTaskTitle) : setError(true)
    }

    return (
        <div className={td.todo}>
            <div className={td.todoItem}>
                <div>
                    <h3 className={td.todoTitle}>{props.todos.todoTitle}</h3>
                    <button className={td.deleteTodoBtn}>Delete list</button>
                </div>
                <div>
                    <input
                        className={td.inputTodoDefault}
                        onChange={onChangeSetNewTaskTitle}
                        onKeyDown={onKeyDownAddNewTask}
                    />
                    <button
                        className={td.addTaskBtn}
                        onClick={onClickAddNewTask}
                    >+</button>
                </div>
                <Tasks
                    todoId={props.todoId}
                    tasks={props.tasks}
                    removeTask={props.removeTask}
                />
                <div>
                    <button className={td.allBtn}>All</button>
                    <button className={td.activeBtn}>Active</button>
                    <button className={td.completedBtn}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;