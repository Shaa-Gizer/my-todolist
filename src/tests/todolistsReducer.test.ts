import {v4} from "uuid";
import {FilterType, TodosType} from "../types";
import {
    addNewTodoAC,
    deleteTodolistAC,
    setNewTodoTitleValueAC, setTodoFilterAC,
    todolistsReducer
} from "../redux/reducers/DimychVersion/todolistsReducer";

test('correct todolist should be removed', () => {
    let todoID1 = v4();
    let todoID2 = v4();

    const startState: TodosType[] = [
        {todoId: todoID1, todoTitle: 'What to learn', filter: FilterType.All},
        {todoId: todoID2, todoTitle: 'What to buy', filter: FilterType.All}
    ];

    // const endState = todolistsReducer(startState, {type: TodoActionsType.DELETE_TODO, todoId: todoID1});

    const endState = todolistsReducer(startState, deleteTodolistAC(todoID1));

    expect(endState.length).toBe(1);
    expect(endState[0].todoId).toBe(todoID2);
});

test('correct todolist should be added', () => {
    let todoID1 = v4();
    let todoID2 = v4();

    let newTodolistTitle = 'New Todolist';

    const startState: TodosType[] = [
        {todoId: todoID1, todoTitle: 'What to learn', filter: FilterType.All},
        {todoId: todoID2, todoTitle: 'What to buy', filter: FilterType.All}
    ];

    // const endState = todolistsReducer(startState, {type: TodoActionsType.ADD_NEW_TODO, newTitle: newTodolistTitle});

    const endState = todolistsReducer(startState, addNewTodoAC(newTodolistTitle));

    expect(endState.length).toBe(3);
    expect(endState[2].todoTitle).toBe(newTodolistTitle);
});

test('correct todolist should change its title', () => {
    let todoID1 = v4();
    let todoID2 = v4();

    let newTodolistTitle = 'New Todolist';

    const startState: TodosType[] = [
        {todoId: todoID1, todoTitle: 'What to learn', filter: FilterType.All},
        {todoId: todoID2, todoTitle: 'What to buy', filter: FilterType.All}
    ];

    // const action = {
    //     type: TodoActionsType.SET_NEW_TODO_TITLE_VALUE as const,
    //     todoId: todoID2,
    //     newTitleValue: newTodolistTitle
    // };
    //
    // const endState = todolistsReducer(startState, action);

    const endState = todolistsReducer(startState, setNewTodoTitleValueAC(todoID2, newTodolistTitle));

    expect(endState[0].todoTitle).toBe('What to learn');
    expect(endState[1].todoTitle).toBe(newTodolistTitle);
});

test('should set correct todolist filter', () => {
    let todoID1 = v4();
    let todoID2 = v4();

    let newFilter: FilterType = FilterType.Active;

    const startState: TodosType[] = [
        {todoId: todoID1, todoTitle: 'What to learn', filter: FilterType.All},
        {todoId: todoID2, todoTitle: 'What to buy', filter: FilterType.All}
    ];

    // const action: SetTodoFilterActionCreatorType = {
    //     type: TodoActionsType.SET_TODO_FILTER,
    //     todoId: todoID2,
    //     filter: newFilter
    // };
    //
    // const endState = todolistsReducer(startState, action);

    const endState = todolistsReducer(startState, setTodoFilterAC(todoID2, newFilter));

    expect(endState[0].filter).toBe(FilterType.All);
    expect(endState[1].filter).toBe(newFilter);
});