import {FilterType, TasksStateType, TodoType} from "../types";


export const filteredTasks = (tasks: TasksStateType, td: TodoType) => {
    switch (td.filter) {
        case FilterType.Active:
            return tasks[td.todoId].filter(t => !t.isDone);
        case FilterType.Completed:
            return tasks[td.todoId].filter(t => t.isDone);
        default:
            return tasks[td.todoId];
    }
}
