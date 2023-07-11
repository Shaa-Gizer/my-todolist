import {AddNewTodoActionCreatorType, DeleteTodoActionCreatorType} from "./todosActionCreatorTypes";

export enum TasksActionTypes {
    ADD_NEW_TASK = "ADD-NEW-TASK",
    REMOVE_TASK = "REMOVE-TASK",
    SET_TASK_STATUS = "SET-TASK-STATUS",
    SET_NEW_TASK_TITLE_VALUE = "SET-NEW-TASK-TITLE-VALUE"
}

export interface AddNewTaskActionCreatorType {
    type: TasksActionTypes.ADD_NEW_TASK,
    taskTitle: string,
    todoId: string
}

export interface RemoveTaskActionCreatorType {
    type: TasksActionTypes.REMOVE_TASK,
    todoId: string,
    taskId: string
}

export interface SetTaskStatusActionCreatorType {
    type: TasksActionTypes.SET_TASK_STATUS,
    todoId: string,
    taskId: string,
    isDone: boolean
}

export interface SetNewTaskTitleValueActionCreatorType {
    type: TasksActionTypes.SET_NEW_TASK_TITLE_VALUE,
    todoId: string,
    taskId: string,
    newTitleValue: string
}

export type TasksActionCreatorsType =
    AddNewTaskActionCreatorType | RemoveTaskActionCreatorType |
    SetTaskStatusActionCreatorType | SetNewTaskTitleValueActionCreatorType |
    AddNewTodoActionCreatorType | DeleteTodoActionCreatorType

