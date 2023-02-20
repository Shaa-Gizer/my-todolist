import {FilterType} from "../../types/todoTypes";

export const enum TodoActionsType {
    SET_TODO_FILTER = "SET-TODO-FILTER",
    DELETE_TODO = "DELETE-TODO",
    ADD_NEW_TODO = "ADD-NEW-TODO",
    SET_NEW_TODO_TITLE_VALUE = "SET-NEW-TODO-TITLE-VALUE"
}

export interface SetTodoFilterActionCreatorType {
    type: TodoActionsType.SET_TODO_FILTER,
    todoId: string,
    filter: FilterType
}

export interface DeleteTodoActionCreatorType {
    type: TodoActionsType.DELETE_TODO,
    todoId: string
}

export interface AddNewTodoActionCreatorType {
    type: TodoActionsType.ADD_NEW_TODO,
    newTitle: string
}

export interface SetNewTodoTitleValueActionCreatorType {
    type: TodoActionsType.SET_NEW_TODO_TITLE_VALUE,
    todoId: string,
    newTitleValue: string
}

export type TodoActionCreatorsType =
    SetTodoFilterActionCreatorType | DeleteTodoActionCreatorType |
    AddNewTodoActionCreatorType | SetNewTodoTitleValueActionCreatorType