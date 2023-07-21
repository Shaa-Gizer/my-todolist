import {
    AddNewTodoActionCreatorType,
    DeleteTodoActionCreatorType,
    FilterType, SetNewTodoTitleValueActionCreatorType, SetTodoFilterActionCreatorType,
    TodoActionCreatorsType,
    TodoActionsType,
    TodoType
} from "../../types";
import {v4} from "uuid";

const initialState: TodoType[] = []

export const todolistsReducer = (state: TodoType[] = initialState, action: TodoActionCreatorsType): TodoType[] => {
    switch (action.type) {
        case TodoActionsType.DELETE_TODO:
            return state.filter(tl => tl.todoId !== action.todoId)
        case TodoActionsType.ADD_NEW_TODO:
            return [{todoId: action.todoID, todoTitle: action.newTitle, filter: FilterType.All}, ...state]
        case TodoActionsType.SET_NEW_TODO_TITLE_VALUE:
            const todolist = state.find(tl => tl.todoId === action.todoId)
            if (todolist) {
                todolist.todoTitle = action.newTitleValue
            }
            return [...state]
        case TodoActionsType.SET_TODO_FILTER:
            return state.map(td => td.todoId === action.todoId ? {...td, filter: action.filter} : td)
        default:
            return state;
    }
}

export const addNewTodolistAC = (newTitle: string): AddNewTodoActionCreatorType => {
    return {
        type: TodoActionsType.ADD_NEW_TODO,
        newTitle,
        todoID: v4()
    }
}

export const deleteTodolistAC = (todoID: string): DeleteTodoActionCreatorType => {
    return {
        type: TodoActionsType.DELETE_TODO,
        todoId: todoID
    }
}

export const setNewTodolistsTitleValueAC = (todoID: string, newTitle: string): SetNewTodoTitleValueActionCreatorType => {
    return {
        type: TodoActionsType.SET_NEW_TODO_TITLE_VALUE,
        todoId: todoID,
        newTitleValue: newTitle
    }
}

export const setTodolistsFilterValueAC = (todoID: string, filter: FilterType): SetTodoFilterActionCreatorType => {
    return {
        type: TodoActionsType.SET_TODO_FILTER,
        todoId: todoID,
        filter: filter
    }
}