import {TasksStateType} from "./taskTypes";

export interface InitTodosStateType {
    todos: TodosType[],
    newTodo: TodosType,
    tasks: TasksStateType
}

export interface TodosType {
    todoId: string,
    todoTitle: string,
    filter: FilterType
}

export type FilterType = 'all' | 'active' | 'completed'