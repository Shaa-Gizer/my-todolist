import {FilterType, TasksStateType, TodoType} from "../types";


export const filteredTasks = (tasks: TasksStateType, todoId: string, filter: FilterType) => {
    switch (filter) {
        case FilterType.Active:
            return tasks[todoId].filter(t => !t.isDone);
        case FilterType.Completed:
            return tasks[todoId].filter(t => t.isDone);
        default:
            return tasks[todoId];
    }
}
