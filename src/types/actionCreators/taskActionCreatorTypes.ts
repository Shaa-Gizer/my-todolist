export enum TaskActionsType {
    ADD_NEW_TASK = "ADD-NEW-TASK",
    REMOVE_TASK = "REMOVE-TASK",
    SET_TASK_STATUS = "SET-TASK-STATUS",
    SET_NEW_TASK_TITLE_VALUE = "SET-NEW-TASK-TITLE-VALUE"
}

export interface AddNewTaskActionCreatorType {
    type: TaskActionsType.ADD_NEW_TASK,
    taskTitle: string,
    todoId: string
}

export interface RemoveTaskActionCreatorType {
    type: TaskActionsType.REMOVE_TASK,
    todoId: string,
    taskId: string
}

export interface SetTaskStatusActionCreatorType {
    type: TaskActionsType.SET_TASK_STATUS,
    todoId: string,
    taskId: string,
    isDone: boolean
}

export interface SetNewTaskTitleValueActionCreatorType {
    type: TaskActionsType.SET_NEW_TASK_TITLE_VALUE,
    todoId: string,
    taskId: string,
    newTitleValue: string
}

export type TaskActionCreatorsType =
    AddNewTaskActionCreatorType | RemoveTaskActionCreatorType |
    SetTaskStatusActionCreatorType | SetNewTaskTitleValueActionCreatorType

