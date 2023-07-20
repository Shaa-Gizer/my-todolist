import {
    AddNewTaskActionCreatorType,
    RemoveTaskActionCreatorType,
    SetNewTaskTitleValueActionCreatorType,
    SetTaskStatusActionCreatorType,
    TasksActionCreatorsType,
    TasksActionTypes,
    TasksStateType,
    TodoActionsType
} from "../../../types";
import {v1} from "uuid";

const initialState: TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: TasksActionCreatorsType): TasksStateType => {
    switch (action.type) {
        case TasksActionTypes.ADD_NEW_TASK: {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todoId];
            const newTasks = [{taskId: v1(), taskTitle: action.taskTitle, isDone: false}, ...tasks]
            stateCopy[action.todoId] = newTasks
            return stateCopy
        }
        case TasksActionTypes.REMOVE_TASK: {
            const stateCopy = {...state};
            const tasks = state[action.todoId];
            stateCopy[action.todoId] = tasks.filter(t => t.taskId !== action.taskId);
            return stateCopy;
        }
        case TasksActionTypes.SET_NEW_TASK_TITLE_VALUE: {
            let tasks = state[action.todoId]
            state[action.todoId] = tasks.map(t => t.taskId === action.taskId ? {...t, taskTitle: action.newTitleValue} : t)
            return {...state}
        }
        case TasksActionTypes.SET_TASK_STATUS: {
            let tasks = state[action.todoId]
            state[action.todoId] = tasks.map(t => t.taskId === action.taskId ? {...t, isDone: action.isDone} : t)
            return {...state}
        }
        case TodoActionsType.ADD_NEW_TODO: {
            const stateCopy = {...state}
            stateCopy[action.todoID] = []
            return {...stateCopy}
        }
        case TodoActionsType.DELETE_TODO: {
            const stateCopy = {...state}
            delete stateCopy[action.todoId]
            return {...stateCopy}
        }
        default:
            return state;
    }
}

export const addNewTaskAC = (todoId: string, newTitle: string): AddNewTaskActionCreatorType => {
    return {
        type: TasksActionTypes.ADD_NEW_TASK,
        todoId: todoId,
        taskTitle: newTitle
    }
}

export const removeTaskAC = (todoId: string, taskID: string): RemoveTaskActionCreatorType => {
    return {
        type: TasksActionTypes.REMOVE_TASK,
        todoId: todoId,
        taskId: taskID
    }
}

export const setNewTaskTitleValueAC = (todoId: string, taskId: string, newTitle: string): SetNewTaskTitleValueActionCreatorType => {
    return {
        type: TasksActionTypes.SET_NEW_TASK_TITLE_VALUE,
        todoId: todoId,
        taskId: taskId,
        newTitleValue: newTitle
    }
}

export const setNewTaskStatusAC = (todoId: string, taskId: string, isDone: boolean): SetTaskStatusActionCreatorType => {
    return {
        type: TasksActionTypes.SET_TASK_STATUS,
        todoId: todoId,
        taskId: taskId,
        isDone: isDone
    }
}