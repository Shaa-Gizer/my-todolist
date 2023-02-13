export type TasksType = {
    taskId: string,
    taskTitle: string,
    isDone: boolean
}

export type TasksStateType = {
    [todoId: string] : TasksType[]
}

export type FilterType = 'all' | 'active' | 'completed'

export type TodosType = {
    todoId: string,
    todoTitle: string,
    filter: FilterType
}
