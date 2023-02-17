import redux from "redux"
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
//
// export interface InitStateType {
//     todos: TodosType[],
//     newTitleText: string,
//     inputState: boolean,
//     filter: "all" | "current" | "completed",
//     editText: string,
// }
//
export interface TasksStateType {
    [todoId: string] : TasksType[]
}

export type FilterType = 'all' | 'active' | 'completed'

//
// export interface RootPageType {
//
// }
//
// interface AddNewTaskActionCreator {
//     type: typeof ADD_NEW_TASK,
//     taskTitle: string,
//     todoId: string
// }
// interface RemoveTaskActionCreator {
//     type: typeof REMOVE_TASK,
//     todoId: string,
//     taskId: string
// }
// interface SetTaskStatusActionCreator {
//     type: typeof SET_TASK_STATUS,
//     todoId: string,
//     taskId: string,
//     isDone: boolean
// }
// interface SetTodoFilterActionCreator {
//     type: typeof SET_TODO_FILTER,
//     todoId: string,
//     filter: FilterType
// }
// interface DeleteTodoActionCreator {
//     type: typeof DELETE_TODO,
//     todoId: string
// }
// interface AddNewTodoActionCreator {
//     type: typeof ADD_NEW_TODO,
//     newTitle: string
// }
// interface SetNewTaskTitleValueActionCreator {
//     type: typeof SET_NEW_TASK_TITLE_VALUE,
//     todoId: string,
//     taskId: string,
//     newTitleValue: string
// }
// interface SetNewTodoTitleValueActionCreator {
//     type: typeof SET_NEW_TASK_TITLE_VALUE,
//     todoId: string,
//     newTitleValue: string
// }
//
// const ADD_NEW_TASK = "ADD-NEW-TASK";
// const REMOVE_TASK = "REMOVE-TASK";
// const SET_TASK_STATUS = "SET-TASK-STATUS";
// const SET_TODO_FILTER = "SET-TODO-FILTER";
// const DELETE_TODO = "DELETE-TODO";
// const ADD_NEW_TODO = "ADD-NEW-TODO";
// const SET_NEW_TASK_TITLE_VALUE = "SET-NEW-TASK-TITLE-VALUE";
// const SET_NEW_TODO_TITLE_VALUE = "SET-NEW-TODO-TITLE-VALUE";
//
// export const homeReducer = (state: InitStateType, action: any) => {
//     switch (action.type) {
//         case ADD_NEW_TASK:
//             break;
//         case REMOVE_TASK:
//             break;
//         case SET_TASK_STATUS:
//             break;
//         case SET_TODO_FILTER:
//             break;
//         case DELETE_TODO:
//             break;
//         case ADD_NEW_TODO:
//             break;
//         case SET_NEW_TASK_TITLE_VALUE:
//             break;
//         case SET_NEW_TODO_TITLE_VALUE:
//             break;
//     }
// }
//
// const onClickAddNewTask = (todoId: string, taskTitle: string): AddNewTaskActionCreator => ({type: ADD_NEW_TASK, todoId, taskTitle});
// const onClickRemoveTask = (todoId: string, taskId: string): RemoveTaskActionCreator => ({type: REMOVE_TASK, todoId, taskId});
// const