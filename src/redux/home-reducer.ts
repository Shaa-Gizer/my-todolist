import {v4} from "uuid";

export interface TasksType {
    taskId: string,
    taskTitle: string,
    isDone: boolean
}

export interface TodosType {
    todoId: string,
    todoTitle: string,
    filter: FilterType
}

export interface InitStateType {
    todos: TodosType[],
    tasks: TasksStateType
}

export interface TasksStateType {
    [todoId: string]: TasksType[]
}

export type FilterType = 'all' | 'active' | 'completed'

interface AddNewTaskActionCreator {
    type: typeof ADD_NEW_TASK,
    taskTitle: string,
    todoId: string
}

interface RemoveTaskActionCreator {
    type: typeof REMOVE_TASK,
    todoId: string,
    taskId: string
}

interface SetTaskStatusActionCreator {
    type: typeof SET_TASK_STATUS,
    todoId: string,
    taskId: string,
    isDone: boolean
}

interface SetTodoFilterActionCreator {
    type: typeof SET_TODO_FILTER,
    todoId: string,
    filter: FilterType
}

interface DeleteTodoActionCreator {
    type: typeof DELETE_TODO,
    todoId: string
}

interface AddNewTodoActionCreator {
    type: typeof ADD_NEW_TODO,
    newTitle: string
}

interface SetNewTaskTitleValueActionCreator {
    type: typeof SET_NEW_TASK_TITLE_VALUE,
    todoId: string,
    taskId: string,
    newTitleValue: string
}

interface SetNewTodoTitleValueActionCreator {
    type: typeof SET_NEW_TODO_TITLE_VALUE,
    todoId: string,
    newTitleValue: string
}

type ActionsType =
    AddNewTaskActionCreator | RemoveTaskActionCreator |
    SetTaskStatusActionCreator | SetTodoFilterActionCreator |
    DeleteTodoActionCreator | AddNewTodoActionCreator |
    SetNewTaskTitleValueActionCreator | SetNewTodoTitleValueActionCreator;


const ADD_NEW_TASK = "ADD-NEW-TASK";
const REMOVE_TASK = "REMOVE-TASK";
const SET_TASK_STATUS = "SET-TASK-STATUS";
const SET_TODO_FILTER = "SET-TODO-FILTER";
const DELETE_TODO = "DELETE-TODO";
const ADD_NEW_TODO = "ADD-NEW-TODO";
const SET_NEW_TASK_TITLE_VALUE = "SET-NEW-TASK-TITLE-VALUE";
const SET_NEW_TODO_TITLE_VALUE = "SET-NEW-TODO-TITLE-VALUE";

let initState: InitStateType = {
    todos: [],
    tasks: {[v4()]: []}
}

export const homeReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.todoId]: [{
                        taskId: v4(),
                        taskTitle: action.taskTitle,
                        isDone: false
                    }, ...state.tasks[action.todoId]]
                }
            }

        case REMOVE_TASK:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.todoId]: state.tasks[action.todoId].filter(t => t.taskId !== action.taskId)
                }
            }

        case SET_TASK_STATUS:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.todoId]: state.tasks[action.todoId].map(t => t.taskId !== action.taskId ? t : {
                        ...t,
                        isDone: action.isDone
                    })
                }
            }

        case SET_TODO_FILTER:
            return {
                ...state,
                todos: state.todos.map(td => td.todoId !== action.todoId ? td : {...td, filter: action.filter})
            }

        case DELETE_TODO:
            return {
                ...state, todos: state.todos.filter(td => td.todoId !== action.todoId)
            }

        case ADD_NEW_TODO:
            return {
                ...state, todos: {todoId: v4(), todoTitle: action.newTitle, filter: "all"}, ...state.todos,
                tasks: {...state.tasks, [action.todoId]: []}
            }

        case SET_NEW_TASK_TITLE_VALUE:
            return {
                ...state, tasks: {
                    ...state.tasks,
                    [action.todoId]: state.tasks[action.todoId].map(t => t.taskId !== action.taskId ? t : {
                        ...t,
                        taskTitle: action.newTitleValue
                    })
                }
            }

        case SET_NEW_TODO_TITLE_VALUE:
            return {
                ...state,
                todos: state.todos.map(td => td.todoId !== action.todoId ? td : {
                    ...td,
                    todoTitle: action.newTitleValue
                })
            }
    }
}

export const addNewTask = (todoId: string, taskTitle: string): AddNewTaskActionCreator => ({
    type: ADD_NEW_TASK,
    todoId,
    taskTitle
});
export const removeTask = (todoId: string, taskId: string): RemoveTaskActionCreator => ({
    type: REMOVE_TASK,
    todoId,
    taskId
});
export const setTaskStatus = (todoId: string, taskId: string, isDone: boolean): SetTaskStatusActionCreator => ({
    type: SET_TASK_STATUS,
    todoId,
    taskId,
    isDone
})
export const setTodoFilter = (todoId: string, filter: FilterType): SetTodoFilterActionCreator => ({
    type: SET_TODO_FILTER,
    todoId,
    filter
})
export const deleteTodo = (todoId: string): DeleteTodoActionCreator => ({
    type: DELETE_TODO,
    todoId
})
export const addNewTodo = (newTitle: string): AddNewTodoActionCreator => ({
    type: ADD_NEW_TODO,
    newTitle
})
export const setNewTaskTitleValue = (todoId: string, taskId: string, newTitleValue: string): SetNewTaskTitleValueActionCreator => ({
    type: SET_NEW_TASK_TITLE_VALUE,
    todoId,
    taskId,
    newTitleValue
})
export const setNewTodoTitleValue = (todoId: string, newTitleValue: string): SetNewTodoTitleValueActionCreator => ({
    type: SET_NEW_TODO_TITLE_VALUE,
    todoId,
    newTitleValue
})