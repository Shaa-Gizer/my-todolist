import React, {ChangeEvent} from 'react';
import tStyle from '../../../styles/Tasks.module.css'
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {TaskType} from "../../../types";

interface TasksPropsType {
    todoId: string,
    tasks: TaskType[],
    removeTask: (todoId: string, taskId: string) => void,
    setNewTaskStatus: (todoId: string, taskId: string, isDone: boolean) => void,
    setNewTaskTitleValue: (todoId: string, taskId: string, newTaskTitleValue: string) => void
}

export const Tasks: React.FC<TasksPropsType> = (props) => {
    console.log('TASKS')

    const taskItems = props.tasks?.length ?
        props.tasks.map(t => {

            const onClickRemoveTask = () => {
                props.removeTask(props.todoId, t.taskId)
            }
            const onChangeSetTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                props.setNewTaskStatus(props.todoId, t.taskId, e.currentTarget.checked)
            }
            const onChangeEditableSpan = (newTaskTitleValue: string) => {
                props.setNewTaskTitleValue(props.todoId, t.taskId, newTaskTitleValue)
            }

            return (
                <div key={t.taskId}
                     className={t.isDone ? `${tStyle.tasksList} ${tStyle.taskIsDone}` : tStyle.tasksList}
                >
                    <Checkbox
                        className={tStyle.taskCheck}
                        checked={t.isDone}
                        onChange={onChangeSetTaskStatus}
                    />
                    <EditableSpan
                        title={t.taskTitle}
                        onChangeEditableSpan={onChangeEditableSpan}
                    />
                    <IconButton className={tStyle.deleteTaskBtn}
                                onClick={onClickRemoveTask}>
                        <Delete className={tStyle.deleteTaskBtn}/>
                    </IconButton>
                </div>
            )
        }) : <span className={tStyle.errorMessage}>No tasks!</span>

    return (
        <div className={tStyle.tasks}>
            {taskItems}
        </div>
    );
};