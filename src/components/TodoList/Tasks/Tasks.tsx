import React from 'react';
import tStyle from './Tasks.module.css'
import {TasksType} from "../../../redux/home-reducer";

type TasksPropsType = {
    todoId: string,
    tasks: TasksType[],
    removeTask: (todoId: string, taskId: string) => void
}

const Tasks: React.FC<TasksPropsType> = (props) => {

    const taskItems = props.tasks.map(t => {

        const onClickRemoveTask = () => {
            props.removeTask(props.todoId, t.taskId)
            console.log(t.taskId)
        }

        return (
            <div key={t.taskId} className={tStyle.tasksList}>
                <input className={tStyle.taskCheck} type='checkbox' checked={t.isDone}/>
                <span className={tStyle.taskTitle}>{t.taskTitle}</span>
                <button
                    className={tStyle.deleteTaskBtn}
                    onClick={onClickRemoveTask}
                >x</button>
            </div>
        )
    })

    return (
        <div>
            {taskItems}
        </div>
    );
};

export default Tasks;