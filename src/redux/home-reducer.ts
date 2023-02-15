export interface TasksType {
    taskId: string,
    taskTitle: string,
    isDone: boolean
}

export interface TasksStateType {
    [todoId: string] : TasksType[]
}

export type FilterType = 'all' | 'active' | 'completed'

export interface TodosType {
    todoId: string,
    todoTitle: string,
    filter: FilterType
}
