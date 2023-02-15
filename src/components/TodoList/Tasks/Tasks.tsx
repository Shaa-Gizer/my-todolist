import React, {ChangeEvent} from 'react';
import tStyle from '../../../styles/Tasks.module.css'
import {TasksType} from "../../../redux/home-reducer";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

interface TasksPropsType {
    todoId: string,
    tasks: TasksType[],
    removeTask: (todoId: string, taskId: string) => void,
    setTaskStatus: (todoId: string, taskId: string, isDone: boolean) => void,
    setNewTaskTitleValue: (todoId: string, taskId: string, newTitleValue: string) => void
}

export const Tasks: React.FC<TasksPropsType> = (props) => {

    const taskItems = props.tasks.length ?
        props.tasks.map(t => {

            const onClickRemoveTask = () => {
                props.removeTask(props.todoId, t.taskId)
            }
            const onChangeSetTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                props.setTaskStatus(props.todoId, t.taskId, e.currentTarget.checked)
            }
            const onChangeEditableSpan = (newTaskTitleValue: string) => {
                props.setNewTaskTitleValue(props.todoId, t.taskId, newTaskTitleValue)
            }

            return (
                <div key={t.taskId}
                     className={t.isDone ? tStyle.taskIsDone : tStyle.tasksList}>
                    <Checkbox
                        className={tStyle.taskCheck}
                        checked={t.isDone}
                        onChange={onChangeSetTaskStatus}
                    />
                    <EditableSpan
                        title={t.taskTitle}
                        onChangeEditableSpan={onChangeEditableSpan}
                    />
                    <IconButton className={tStyle.deleteTaskBtn}>
                        <Delete className={tStyle.deleteTaskBtn}
                                onClick={onClickRemoveTask}/>
                    </IconButton>
                </div>
            )
        }) : <span className={tStyle.errorMessage}>No tasks!</span>

    return (
        <div>
            {taskItems}
        </div>
    );
};