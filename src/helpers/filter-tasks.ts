import {FilterType, TaskType} from "../types";


export const filteredTasks = (tasks: TaskType[], filter: FilterType) => {
    switch (filter) {
        case FilterType.Active:
            return tasks.filter(t => !t.isDone);
        case FilterType.Completed:
            return tasks.filter(t => t.isDone);
        default:
            return tasks;
    }
}
