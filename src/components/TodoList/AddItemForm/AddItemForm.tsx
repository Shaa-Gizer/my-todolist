import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import aifStyle from "../../../styles/AddItemForm.module.css";
import {IconButton, TextField} from "@mui/material";
import {Add} from "@mui/icons-material";

interface AddItemFormPropsType {
    addNewItem: (taskTitle: string) => void
}

export const AddItemForm: React.FC<AddItemFormPropsType> = (props) => {

    const [newTaskTitle, setNewTaskTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onChangeSetNewTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setNewTaskTitle(e.currentTarget.value)
    }
    const onClickAddNewItem = () => {
        newTaskTitle.trim() ? props.addNewItem(newTaskTitle) : setError(true);
        setNewTaskTitle('')
    }
    const onKeyDownAddNewTask = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && onClickAddNewItem()
    }
    const onBlurSetErrorFalse = () => setError(false);

    const inputErrorClass = error ? aifStyle.error : aifStyle.inputTodoDefault;

    return (
        <div className={aifStyle.main}>
            <TextField
                color={'primary'}
                variant={'outlined'}
                label={!error ? 'New title' : 'Error!'}
                error={error}
                helperText={error ? 'Title is required' : ''}
                value={newTaskTitle}
                className={inputErrorClass}
                onChange={onChangeSetNewTaskTitle}
                onBlur={onBlurSetErrorFalse}
                onKeyDown={onKeyDownAddNewTask}
                autoFocus
            />
            <IconButton>
                <Add className={aifStyle.addTaskBtn}
                     onClick={onClickAddNewItem}/>
            </IconButton>
        </div>
    );
};