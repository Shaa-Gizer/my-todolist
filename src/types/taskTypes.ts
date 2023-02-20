export interface TasksType {
    taskId: string,
    taskTitle: string,
    isDone: boolean
}

export interface TasksStateType {
    [todoId: string]: TasksType[]
}

export interface InitTasksStateType {
    tasks: TasksStateType
}