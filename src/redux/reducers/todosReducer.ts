import {v4} from "uuid";
import {FilterType, InitTodosStateType} from "../../types/todoTypes";
import {
    AddNewTodoActionCreatorType,
    DeleteTodoActionCreatorType,
    SetNewTodoTitleValueActionCreatorType,
    SetTodoFilterActionCreatorType, TodoActionCreatorsType, TodoActionsType
} from "../../types/actionCreators/todoActionCreatorTypes";

let initTodosState: InitTodosStateType = {
    todos: [],
    newTodo: {todoId: v4(), todoTitle: '', filter: "all"},
    tasks: {[v4()]: []}
}


export const todosReducer = (state = initTodosState, action: TodoActionCreatorsType): InitTodosStateType => {
    switch (action.type) {
        case TodoActionsType.SET_TODO_FILTER:
            return {
                ...state,
                todos: state.todos.map(td => td.todoId !== action.todoId ? td : {...td, filter: action.filter})
            }
        case TodoActionsType.DELETE_TODO:
            return {
                ...state, todos: state.todos.filter(td => td.todoId !== action.todoId)
            }
        case TodoActionsType.ADD_NEW_TODO:
            return {
                ...state, newTodo: {...state, todoId: v4(), todoTitle: action.newTitle, filter: "all"},
                todos: [state.newTodo, ...state.todos],
                tasks: {...state.tasks, [state.newTodo.todoId]: []}
            }
        case TodoActionsType.SET_NEW_TODO_TITLE_VALUE:
            return {
                ...state,
                todos: state.todos.map(td => td.todoId !== action.todoId ? td : {
                    ...td,
                    todoTitle: action.newTitleValue
                })
            }
        default:
            return state
    }
}

export const setTodoFilter = (todoId: string, filter: FilterType): SetTodoFilterActionCreatorType => ({
    type: TodoActionsType.SET_TODO_FILTER,
    todoId,
    filter
})
export const deleteTodo = (todoId: string): DeleteTodoActionCreatorType => ({
    type: TodoActionsType.DELETE_TODO,
    todoId
})
export const addNewTodo = (newTitle: string): AddNewTodoActionCreatorType => ({
    type: TodoActionsType.ADD_NEW_TODO,
    newTitle
})
export const setNewTodoTitleValue = (todoId: string, newTitleValue: string): SetNewTodoTitleValueActionCreatorType => ({
    type: TodoActionsType.SET_NEW_TODO_TITLE_VALUE,
    todoId,
    newTitleValue
})