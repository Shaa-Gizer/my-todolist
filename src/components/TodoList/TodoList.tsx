import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import tdStyle from './TodoList.module.css'
import {FilterType, TasksType, TodosType} from "../../redux/home-reducer";
import Tasks from "./Tasks/Tasks";
import AddItemForm from "./AddItemForm";

type TodosPropsType = {
    todoId: string,
    todos: TodosType,
    tasks: TasksType[],
    addNewTask: (todoId: string, taskTitle: string) => void,
    removeTask: (todoId: string, taskId: string) => void,
    setTaskStatus: (todoId: string, taskId: string, isDone: boolean) => void,
    setTodoFilter: (todoId: string, filter: FilterType) => void,
    deleteTodo: (todoId: string) => void
}

const TodoList: React.FC<TodosPropsType> = (props) => {

    const onClickDeleteTodo = () => {
        props.deleteTodo(props.todoId)
    }
    const onClickSetAllFilterValue = () => props.setTodoFilter(props.todoId, 'all')
    const onClickSetActiveFilterValue = () => props.setTodoFilter(props.todoId, 'active')
    const onClickSetCompletedFilterValue = () => props.setTodoFilter(props.todoId, 'completed')

    return (
        <div className={tdStyle.todo}>
            <div className={tdStyle.todoItem}>
                <div>
                    <h3 className={tdStyle.todoTitle}>{props.todos.todoTitle}</h3>
                    <button
                        className={tdStyle.deleteTodoBtn}
                        onClick={onClickDeleteTodo}
                    >Delete list</button>
                </div>
                <AddItemForm
                    todoId={props.todoId}
                    addNewTask={props.addNewTask}
                />
                <Tasks
                    todoId={props.todoId}
                    tasks={props.tasks}
                    removeTask={props.removeTask}
                    setTaskStatus={props.setTaskStatus}
                />
                <div>
                    <button
                        className={props.todos.filter === 'all' ? tdStyle.allBtn : tdStyle.defaultFilterBtn}
                        onClick={onClickSetAllFilterValue}
                    >All</button>
                    <button
                        className={props.todos.filter === 'active' ? tdStyle.activeBtn : tdStyle.defaultFilterBtn}
                        onClick={onClickSetActiveFilterValue}
                    >Active</button>
                    <button
                        className={props.todos.filter === 'completed' ? tdStyle.completedBtn : tdStyle.defaultFilterBtn}
                        onClick={onClickSetCompletedFilterValue}
                    >Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;