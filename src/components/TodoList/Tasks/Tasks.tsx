import React, {ChangeEvent} from 'react';
import tStyle from '../../../styles/Tasks.module.css'
import {removeTask, setNewTaskTitleValue, setTaskStatus, TasksType} from "../../../redux/home-reducer";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {useDispatch} from "react-redux";

interface TasksPropsType {
    todoId: string,
    tasks: TasksType[]
}

export const Tasks: React.FC<TasksPropsType> = (props) => {
    const dispatch = useDispatch();

    const taskItems = props.tasks.length ?
        props.tasks.map(t => {

            const onClickRemoveTask = () => {
                dispatch(removeTask(props.todoId, t.taskId))
            }
            const onChangeSetTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                dispatch(setTaskStatus(props.todoId, t.taskId, e.currentTarget.checked))
            }
            const onChangeEditableSpan = (newTaskTitleValue: string) => {
                dispatch(setNewTaskTitleValue(props.todoId, t.taskId, newTaskTitleValue))
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