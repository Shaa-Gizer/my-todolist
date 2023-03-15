import {
    AddNewTaskActionCreatorType,
    InitTasksStateType,
    RemoveTaskActionCreatorType, SetNewTaskTitleValueActionCreatorType, SetTaskStatusActionCreatorType,
    TaskActionCreatorsType,
    TaskActionsType
} from "../../types";
import {v4} from "uuid";

let initTasksState: InitTasksStateType = {
    tasks: {}
}

export const tasksReducer = (state = initTasksState, action: TaskActionCreatorsType): InitTasksStateType => {
    switch (action.type) {
        case TaskActionsType.ADD_NEW_TASK:

            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.todoId]: [{
                        taskId: v4(),
                        taskTitle: action.taskTitle,
                        isDone: false
                    }, ...(state.tasks?.[action.todoId] ? state.tasks[action.todoId] : [])]

                }
            }
        case TaskActionsType.REMOVE_TASK:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.todoId]: state.tasks[action.todoId].filter(t => t.taskId !== action.taskId)
                }
            }
        case TaskActionsType.SET_TASK_STATUS:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.todoId]: state.tasks[action.todoId].map(t => t.taskId !== action.taskId ? t :
                        {...t, isDone: action.isDone})
                }
            }
        case TaskActionsType.SET_NEW_TASK_TITLE_VALUE:
            return {
                ...state, tasks: {
                    ...state.tasks,
                    [action.todoId]: state.tasks[action.todoId].map(t => t.taskId !== action.taskId ? t :
                        {...t, taskTitle: action.newTitleValue}
                    )
                }
            }
        default:
            return state
    }
}

export const addNewTask = (todoId: string, taskTitle: string): AddNewTaskActionCreatorType => ({
    type: TaskActionsType.ADD_NEW_TASK,
    todoId,
    taskTitle
});
export const removeTask = (todoId: string, taskId: string): RemoveTaskActionCreatorType => ({
    type: TaskActionsType.REMOVE_TASK,
    todoId,
    taskId
});
export const setTaskStatus = (todoId: string, taskId: string, isDone: boolean): SetTaskStatusActionCreatorType => ({
    type: TaskActionsType.SET_TASK_STATUS,
    todoId,
    taskId,
    isDone
})
export const setNewTaskTitleValue = (todoId: string, taskId: string, newTitleValue: string): SetNewTaskTitleValueActionCreatorType => ({
    type: TaskActionsType.SET_NEW_TASK_TITLE_VALUE,
    todoId,
    taskId,
    newTitleValue
})