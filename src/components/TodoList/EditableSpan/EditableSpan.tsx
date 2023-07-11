import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import esStyle from "../../../styles/EditableSpan.module.css";
import {TextField} from "@mui/material";

interface EditableSpanPropsType {
    title: string,
    onChangeEditableSpan: (newTitleValue: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
    console.log('EDITABLE-SPAN')

    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const activateEditMode = () => {
        setError(false)
        setEditMode(true)
        setTitle(props.title)
    }
    const deactivateEditMode = () => {
        if (title.trim()) {
            props.onChangeEditableSpan(title)
            setEditMode(false)
        }
        else {
            setEditMode(true)
            setError(true)
        }
    }

    const onChangeEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyDownSetNewTitle = (e: KeyboardEvent<HTMLInputElement>) => {
      e.key === 'Enter' && deactivateEditMode()
    }

    return editMode
        ? <TextField
            value={title}
            onBlur={deactivateEditMode}
            onChange={onChangeEditTitle}
            onKeyDown={onKeyDownSetNewTitle}
            className={esStyle.editMode}
            autoFocus
            label={error ? "Title is required!" : ''}
            error={error}
        />
        : <span
            className={esStyle.taskTitle}
            onDoubleClick={activateEditMode}
        >{props.title}</span>
};