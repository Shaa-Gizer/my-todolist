export interface TaskType {
    taskId: string,
    taskTitle: string,
    isDone: boolean
}

export interface TasksStateType {
    [todoId: string]: TaskType[]
}

export interface InitTasksStateType {
    tasks: TasksStateType
}