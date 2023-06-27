import {
    AddNewTaskActionCreatorType,
    RemoveTaskActionCreatorType, SetNewTaskTitleValueActionCreatorType, SetTaskStatusActionCreatorType,
    TaskActionCreatorsType,
    TaskActionsType,
    TasksStateType
} from "../../../types";

export const tasksReducer = (state: TasksStateType, action: TaskActionCreatorsType): TasksStateType => {
    switch (action.type) {
        case TaskActionsType.ADD_NEW_TASK: {
            const stateCopy = {...state};
            return stateCopy
        }
        case TaskActionsType.REMOVE_TASK: {
            const stateCopy = {...state};
            const tasks = state[action.todoId];
            const filteredTasks = tasks.filter(t => t.taskId !== action.taskId);
            stateCopy[action.todoId] = filteredTasks;
            return stateCopy;
        }
        case TaskActionsType.SET_NEW_TASK_TITLE_VALUE: {
            return {...state}
        }
        case TaskActionsType.SET_TASK_STATUS: {
            return {...state}
        }
        default:
            throw new Error('I dont understand this action type')
    }
}

export const addNewTaskAC = (todoId: string, newTitle: string): AddNewTaskActionCreatorType => {
    return {
        type: TaskActionsType.ADD_NEW_TASK,
        todoId: todoId,
        taskTitle: newTitle
    }
}

export const removeTaskAC = (todoId: string, taskID: string): RemoveTaskActionCreatorType => {
    return {
        type: TaskActionsType.REMOVE_TASK,
        todoId: todoId,
        taskId: taskID
    }
}

export const setNewTaskTitleValueAC = (todoId: string, taskID: string, newTitle: string): SetNewTaskTitleValueActionCreatorType => {
    return {
        type: TaskActionsType.SET_NEW_TASK_TITLE_VALUE,
        todoId: todoId,
        taskId: taskID,
        newTitleValue: newTitle
    }
}

export const setTaskStatusAC = (todoId: string, taskId: string, isDone: boolean): SetTaskStatusActionCreatorType => {
    return {
        type: TaskActionsType.SET_TASK_STATUS,
        todoId: todoId,
        taskId: taskId,
        isDone: isDone
    }
}