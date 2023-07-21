import {
    addNewTaskAC,
    removeTaskAC,
    setNewTaskTitleValueAC,
    setNewTaskStatusAC,
    tasksReducer
} from "../redux/reducers/tasksReducer";
import {TasksStateType} from "../types";
import {addNewTodolistAC, deleteTodolistAC} from "../redux/reducers/todolistsReducer";

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
test('correct task should be added to correct todo', () => {
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

    const action = addNewTaskAC('todoID2', 'juice');
    const endState = tasksReducer(startState, action);

    expect(endState['todoID1'].length).toBe(3);
    expect(endState['todoID2'].length).toBe(4);
    expect(endState['todoID2'][0].taskId).toBeDefined();
    expect(endState['todoID2'][0].taskTitle).toBe('juice');
    expect(endState['todoID2'][0].isDone).toBe(false);
    // expect(endState['todoID2'].every(t => t.taskId != '2')).toBeTruthy()
});
test('status of specified task should be changed', () => {
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

    const action = setNewTaskStatusAC('todoID2', '2', false);
    const endState = tasksReducer(startState, action);

    expect(endState['todoID2'][1].isDone).toBeFalsy();
    expect(endState['todoID1'][1].isDone).toBeTruthy();
});
test('title of specified task should be changed', () => {
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

    const action = setNewTaskTitleValueAC('todoID2', '2', 'New');
    const endState = tasksReducer(startState, action);

    expect(endState['todoID1'][1].taskTitle).toBe('JS');
    expect(endState['todoID2'][1].taskTitle).toBe('New');
});

test('new property with new array should be added when new todolist is added', () => {
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

    const action = addNewTodolistAC('Title no matter');
    const endState = tasksReducer(startState, action);

    const keys = Object.keys(endState)
    const newKey = keys.find(k => k != 'todoID1' && k != 'todoID2');

    if (!newKey) {
        throw Error ('new key should be added')
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});
test('property with todoID should be deleted', () => {
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

    const action = deleteTodolistAC('todoID2');
    const endState = tasksReducer(startState, action);

    const keys = Object.keys(endState)

    expect(keys.length).toBe(1);
    expect(endState['todoID2']).not.toBeDefined();
})