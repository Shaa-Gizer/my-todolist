import {removeTaskAC, tasksReducer} from "../redux/reducers/DimychVersion/tasksReducer";
import {TasksStateType} from "../types";

test('correct task should be removed from correct todo', () => {
    const startState: TasksStateType = {
        'todoID1' : [
            {taskId: '1', taskTitle: 'CSS', isDone: false},
            {taskId: '2', taskTitle: 'JS', isDone: true},
            {taskId: '3', taskTitle: 'React', isDone: false},
        ],
        'todoID2' : [
            {taskId: '1', taskTitle: 'bread', isDone: false},
            {taskId: '2', taskTitle: 'milk', isDone: true},
            {taskId: '3', taskTitle: 'tea', isDone: false},
        ]
    };

    const action = removeTaskAC('todoID2', '2');
    const endState = tasksReducer(startState, action);

    expect(endState['todoID1'].length).toBe(3)
    expect(endState['todoID2'].length).toBe(2)
    expect(endState['todoID2'].every(t => t.taskId != '2')).toBeTruthy()
});