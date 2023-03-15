export interface InitTodosStateType {
    todos: TodosType[]
}

export interface TodosType {
    todoId: string,
    todoTitle: string,
    filter: FilterType
}


export enum FilterType {
    All = 'all',
    Active = 'active',
    Completed = 'completed',
}