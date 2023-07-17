import React, {ChangeEvent} from 'react';
import tStyle from '../../../styles/Tasks.module.css'
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {FilterType, TaskType} from "../../../types";
import {RootStateType} from "../../../redux/store";
import {
    removeTaskAC,
    setNewTaskStatusAC,
    setNewTaskTitleValueAC
} from "../../../redux/reducers/DimychVersion/tasksReducer";
import {filteredTasks} from "../../../helpers";

interface TasksPropsType {
    todoId: string,
    filter: FilterType
}

export const Tasks: React.FC<TasksPropsType> = (props) => {
    // console.log('TASKS')
    const tasks = useSelector<RootStateType, TaskType[]>(state => state.tasks[props.todoId])
    const dispatch = useDispatch()
    const filtered = filteredTasks(tasks, props.filter)

    const taskItems = filtered?.length ?
        filtered.map(t => {

            const onClickRemoveTask = () => {
                dispatch(removeTaskAC(props.todoId, t.taskId))
            }
            const onChangeSetTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                dispatch(setNewTaskStatusAC(props.todoId, t.taskId, e.currentTarget.checked))
            }
            const onChangeEditableSpan = (newTaskTitleValue: string) => {
                dispatch(setNewTaskTitleValueAC(props.todoId, t.taskId, newTaskTitleValue))
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