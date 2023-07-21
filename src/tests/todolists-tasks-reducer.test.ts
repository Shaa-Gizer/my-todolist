import {TasksStateType, TodoType} from "../types";
import {addNewTodolistAC, todolistsReducer} from "../redux/reducers/todolistsReducer";
import {tasksReducer} from "../redux/reducers/tasksReducer";

test('ids should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodolistsState: TodoType[] = [];

    const action = addNewTodolistAC('New todo');
    const endTasksState = tasksReducer(startTasksState, action);
    const endTodolistsState = todolistsReducer(startTodolistsState, action);

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].todoId;

    expect(idFromTasks).toBe(action.todoID)
    expect(idFromTodolists).toBe(action.todoID)
})