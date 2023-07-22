import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import aifStyle from "../../../styles/AddItemForm.module.css";
import {IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";

interface AddItemFormPropsType {
    addNewItem: (title: string) => void
}

export const AddItemForm: React.FC<AddItemFormPropsType> = React.memo((props) => {
    console.log('ADD-ITEM-FORM')

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onChangeSetNewTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false);
        setTitle(e.currentTarget.value);
    }
    const onClickAddNewItem = () => {
        title.trim() ? props.addNewItem(title) : setError(true);
        setTitle('');
    }
    const onKeyDownAddNewTask = (e: KeyboardEvent<HTMLInputElement>) => {
        error && setError(false);
        e.key === 'Enter' && onClickAddNewItem();
    }
    const onBlurSetErrorFalse = () => setError(false);

    const addBtnStyle = {
        marginLeft: 10 + 'px',
        alignSelf: 'center'
    }

    const textFieldStyle = {
        background: '#ffffff',
        borderRadius: 5 + 'px'
    }

    return (
        <div className={aifStyle.main}>
            <TextField
                color={'primary'}
                variant={'outlined'}
                label={!error ? 'New title' : 'Error!'}
                error={error}
                helperText={error ? 'Title is required' : ''}
                value={title}
                style={textFieldStyle}
                onChange={onChangeSetNewTaskTitle}
                onBlur={onBlurSetErrorFalse}
                onKeyDown={onKeyDownAddNewTask}
                autoFocus
            />
            <IconButton onClick={onClickAddNewItem}
                        className={aifStyle.addTaskBtn}
                        style={addBtnStyle}
            >
                <AddBox style={{color: '#2ca46a'}}
                        fontSize={'medium'}
                />
            </IconButton>
        </div>
    );
});