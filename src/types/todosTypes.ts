export interface InitTodosStateType {
    todos: TodoType[]
}

export interface TodoType {
    todoId: string,
    todoTitle: string,
    filter: FilterType
}

export enum FilterType {
    All = 'all',
    Active = 'active',
    Completed = 'completed',
}