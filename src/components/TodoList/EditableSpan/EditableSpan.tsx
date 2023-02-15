import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import esStyle from "../../../styles/EditableSpan.module.css";

interface EditableSpanPropsType {
    title: string,
    onChangeEditableSpan: (newTitleValue: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState('')

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.onChangeEditableSpan(title)
    }

    const onChangeEditTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyDownSetNewTitle = (e: KeyboardEvent<HTMLInputElement>) => {
      e.key === 'Enter' && deactivateEditMode()
    }

    return editMode
        ? <input
            value={title}
            onBlur={deactivateEditMode}
            onChange={onChangeEditTitle}
            onKeyDown={onKeyDownSetNewTitle}
            className={esStyle.editMode}
            autoFocus
        />
        : <span
            className={esStyle.taskTitle}
            onDoubleClick={activateEditMode}
        >{props.title}</span>
};