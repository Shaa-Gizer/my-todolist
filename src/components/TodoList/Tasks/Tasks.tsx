import React, {ChangeEvent} from 'react';
import tStyle from './Tasks.module.css'
import {TasksType} from "../../../redux/home-reducer";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type TasksPropsType = {
    todoId: string,
    tasks: TasksType[],
    removeTask: (todoId: string, taskId: string) => void,
    setTaskStatus: (todoId: string, taskId: string, isDone: boolean) => void
}

const Tasks: React.FC<TasksPropsType> = (props) => {

    const taskItems = props.tasks.length ?
        props.tasks.map(t => {

        const onClickRemoveTask = () => {
            props.removeTask(props.todoId, t.taskId)
        }
        const onChangeSetTaskStatus = (e : ChangeEvent<HTMLInputElement>) => {
            props.setTaskStatus(props.todoId, t.taskId, e.currentTarget.checked)
        }

        return (
            <div key={t.taskId}
                 className={t.isDone ? tStyle.taskIsDone : tStyle.tasksList}>
                <input
                    className={tStyle.taskCheck}
                    type='checkbox'
                    checked={t.isDone}
                    onChange={onChangeSetTaskStatus}
                />
                <span className={tStyle.taskTitle}>{t.taskTitle}</span>
                <button
                    className={tStyle.deleteTaskBtn}
                    onClick={onClickRemoveTask}
                >x</button>
            </div>
        )
    }) : <span className={tStyle.errorMessage}>No tasks!</span>

    return (
        <div>
            {taskItems}
        </div>
    );
};

export default Tasks;