import {FilterType, TodosType, TasksStateType} from "@types";

export const filteredTasks = (tasks: TasksStateType, td: TodosType) => {
    switch (td.filter) {
        case FilterType.Active:
            return tasks[td.todoId].filter(t => !t.isDone);
            break;
        case FilterType.Completed:
            return tasks[td.todoId].filter(t => t.isDone);
            break;
        default:
            return tasks[td.todoId];
    }
}
