import React from 'react'
import {Task} from "./Task";
import {action} from '@storybook/addon-actions'

export default {
    title: 'Task Component',
    component: Task,
}

const callbackForRemovingTask = action('Task was removed');
const callbackForChangingTaskStatus = action('Task status was changed');
const callbackForChangingTaskTitle = action('Task title was changed');
export const TasksBaseExample = () => {
    return (
        <>
            <Task
                todoId={'todolistId1'}
                task={{taskId: '1', taskTitle: 'React', isDone: true}}
                removeTask={callbackForRemovingTask}
                setTaskStatus={callbackForChangingTaskStatus}
                changeEditableSpan={callbackForChangingTaskTitle}
            />
            <Task
                todoId={'todolistId2'}
                task={{taskId: '2', taskTitle: 'Storybook', isDone: false}}
                removeTask={callbackForRemovingTask}
                setTaskStatus={callbackForChangingTaskStatus}
                changeEditableSpan={callbackForChangingTaskTitle}
            />
        </>
    )
}