import React from 'react';
import tdStyle from '../../styles/TodoList.module.css'
import {FilterType, TasksType, TodosType} from "../../redux/home-reducer";
import {Tasks} from "./Tasks/Tasks";
import {AddItemForm} from "./AddItemForm/AddItemForm";
import {EditableSpan} from "./EditableSpan/EditableSpan";
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

interface TodosPropsType {
    todoId: string,
    todos: TodosType,
    tasks: TasksType[],
    addNewTask: (todoId: string, taskTitle: string) => void,
    removeTask: (todoId: string, taskId: string) => void,
    setTaskStatus: (todoId: string, taskId: string, isDone: boolean) => void,
    setTodoFilter: (todoId: string, filter: FilterType) => void,
    deleteTodo: (todoId: string) => void,
    setNewTaskTitleValue: (todoId: string, taskId: string, newTitleValue: string) => void,
    setNewTodoTitleValue: (todoId: string, newTitleValue: string) => void
}

export const TodoList: React.FC<TodosPropsType> = (props) => {

    const onClickDeleteTodo = () => {
        props.deleteTodo(props.todoId)
    }
    const onClickSetAllFilterValue = () => props.setTodoFilter(props.todoId, 'all')
    const onClickSetActiveFilterValue = () => props.setTodoFilter(props.todoId, 'active')
    const onClickSetCompletedFilterValue = () => props.setTodoFilter(props.todoId, 'completed')

    const addNewTask = (newTaskTitle: string) => {
        props.addNewTask(props.todoId, newTaskTitle)
    }
    const onChangeSetTodoTitleValue = (newTodoTitleValue: string) => {
        props.setNewTodoTitleValue(props.todoId, newTodoTitleValue)
    }

    return (
        <div className={tdStyle.todo}>
            <div className={tdStyle.todoItem}>
                <div className={tdStyle.titleBtn}>
                    <h3 className={tdStyle.todoTitle}>
                        <EditableSpan
                            title={props.todos.todoTitle}
                            onChangeEditableSpan={onChangeSetTodoTitleValue}
                        />
                    </h3>
                    <IconButton>
                        <Delete
                            className={tdStyle.deleteTodoBtn}
                            onClick={onClickDeleteTodo}
                        />
                    </IconButton>
                </div>
                <AddItemForm
                    addNewItem={addNewTask}
                />
                <Tasks
                    todoId={props.todoId}
                    tasks={props.tasks}
                    removeTask={props.removeTask}
                    setTaskStatus={props.setTaskStatus}
                    setNewTaskTitleValue={props.setNewTaskTitleValue}
                />
                <div>
                    <button
                        className={props.todos.filter === 'all' ? tdStyle.allBtn : tdStyle.defaultFilterBtn}
                        onClick={onClickSetAllFilterValue}
                    >All
                    </button>
                    <button
                        className={props.todos.filter === 'active' ? tdStyle.activeBtn : tdStyle.defaultFilterBtn}
                        onClick={onClickSetActiveFilterValue}
                    >Active
                    </button>
                    <button
                        className={props.todos.filter === 'completed' ? tdStyle.completedBtn : tdStyle.defaultFilterBtn}
                        onClick={onClickSetCompletedFilterValue}
                    >Completed
                    </button>
                </div>
            </div>
        </div>
    );
};