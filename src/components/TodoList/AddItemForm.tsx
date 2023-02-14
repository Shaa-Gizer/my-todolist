import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import tdStyle from "./TodoList.module.css";

type AddItemFormPropsType = {
    todoId: string,
    addNewTask: (todoId: string, taskTitle: string) => void
}

const AddItemForm: React.FC<AddItemFormPropsType> = (props) => {

    const [newTaskTitle, setNewTaskTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onChangeSetNewTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setNewTaskTitle(e.currentTarget.value)
    }
    const onClickAddNewTask = () => {
        newTaskTitle.trim() ? props.addNewTask(props.todoId, newTaskTitle) : setError(true);
        setNewTaskTitle('')
    }
    const onKeyDownAddNewTask = (e : KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' &&  onClickAddNewTask()
    }

    const inputErrorClass = error ? tdStyle.error : tdStyle.inputTodoDefault;
    const errorMessage = <span className={tdStyle.errorText}>Error!</span>;

    return (
        <div>
            <input
                value={newTaskTitle}
                className={inputErrorClass}
                onChange={onChangeSetNewTaskTitle}
                onKeyDown={onKeyDownAddNewTask}
            />
            <button
                className={tdStyle.addTaskBtn}
                onClick={onClickAddNewTask}
            >+</button>
            {error && errorMessage}
        </div>
    );
};

export default AddItemForm;