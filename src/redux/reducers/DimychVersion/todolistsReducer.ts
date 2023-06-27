import {
    AddNewTodoActionCreatorType,
    DeleteTodoActionCreatorType,
    FilterType, SetNewTodoTitleValueActionCreatorType, SetTodoFilterActionCreatorType,
    TodoActionCreatorsType,
    TodoActionsType,
    TodosType
} from "../../../types";
import {v4} from "uuid";

export const todolistsReducer = (state: TodosType[], action: TodoActionCreatorsType): TodosType[] => {
    switch (action.type) {
        case TodoActionsType.DELETE_TODO:
            return state.filter(tl => tl.todoId !== action.todoId)
        case TodoActionsType.ADD_NEW_TODO:
            return [...state, {todoId: v4(), todoTitle: action.newTitle, filter: FilterType.All}]
        case TodoActionsType.SET_NEW_TODO_TITLE_VALUE:
            const todolist = state.find(tl => tl.todoId === action.todoId)
            if (todolist) {
                todolist.todoTitle = action.newTitleValue
            }
            return [...state]
        case TodoActionsType.SET_TODO_FILTER:
            const todolistFilter = state.find(tl => tl.todoId === action.todoId)
            if (todolistFilter) {
                todolistFilter.filter = action.filter
            }
            return [...state]
        default:
            throw new Error('I dont understand this action type')
    }
}

export const addNewTodoAC = (newTitle: string): AddNewTodoActionCreatorType => {
    return {
        type: TodoActionsType.ADD_NEW_TODO,
        newTitle: newTitle
    }
}

export const deleteTodolistAC = (todoID: string): DeleteTodoActionCreatorType => {
    return {
        type: TodoActionsType.DELETE_TODO,
        todoId: todoID
    }
}

export const setNewTodoTitleValueAC = (todoID: string, newTitle: string): SetNewTodoTitleValueActionCreatorType => {
    return {
        type: TodoActionsType.SET_NEW_TODO_TITLE_VALUE,
        todoId: todoID,
        newTitleValue: newTitle
    }
}

export const setTodoFilterAC = (todoID: string, filter: FilterType): SetTodoFilterActionCreatorType => {
    return {
        type: TodoActionsType.SET_TODO_FILTER,
        todoId: todoID,
        filter: filter
    }
}