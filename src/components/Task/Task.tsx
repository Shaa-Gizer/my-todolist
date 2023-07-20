import React, {ChangeEvent, useCallback} from 'react';
import tStyle from "../../styles/Tasks.module.css";
import {Checkbox, IconButton} from "@mui/material";
import {EditableSpan} from "../TodoList/EditableSpan/EditableSpan";
import {Delete} from "@mui/icons-material";
import {TaskType} from "../../types";

interface TaskPropsType {
    todoId: string,
    task: TaskType
    removeTask: (taskId: string) => void,
    setTaskStatus: (taskId: string, isDone: boolean) => void,
    changeEditableSpan: (taskId: string, newTaskTitleValue: string) => void
}

export const Task: React.FC<TaskPropsType> = React.memo((props) => {
    console.log('TASK')

    const onChangeSetTaskStatus = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        props.setTaskStatus(props.task.taskId, e.currentTarget.checked)
    }, [props.setTaskStatus, props.task.taskId])
    const onChangeEditableSpan = useCallback((newTaskTitleValue: string) => {
        props.changeEditableSpan(props.task.taskId, newTaskTitleValue)
    }, [props.changeEditableSpan, props.task.taskId])
    const onClickRemoveTask = useCallback(() => {
        props.removeTask(props.task.taskId)
    }, [props.removeTask, props.task.taskId])

    return (
        <div className={props.task.isDone ? `${tStyle.tasksList} ${tStyle.taskIsDone}` : tStyle.tasksList}>
            <div className={tStyle.wrapper}>
                <Checkbox
                    className={tStyle.taskCheck}
                    checked={props.task.isDone}
                    onChange={onChangeSetTaskStatus}
                />
                <EditableSpan
                    title={props.task.taskTitle}
                    onChangeEditableSpan={onChangeEditableSpan}
                />
            </div>
            <IconButton className={tStyle.deleteTaskBtn}
                        onClick={onClickRemoveTask}>
                <Delete className={tStyle.deleteTaskBtn}/>
            </IconButton>
        </div>
    );
});
