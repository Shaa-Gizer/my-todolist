import React, {useCallback} from 'react';
import tdStyle from '../../styles/TodoList.module.css'
import {Tasks} from "./Tasks/Tasks";
import {AddItemForm} from "./AddItemForm/AddItemForm";
import {EditableSpan} from "./EditableSpan/EditableSpan";
import {Button, Grid, IconButton, Paper} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {FilterType, TasksStateType, TodoType} from "../../types";
import {filteredTasks} from "../../helpers";
import {
    addNewTaskAC,
    removeTaskAC,
    setNewTaskStatusAC,
    setNewTaskTitleValueAC
} from "../../redux/reducers/DimychVersion/tasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";

interface TodosPropsType {
    todoId: string,
    todoTitle: string,
    filter: FilterType,
    deleteTodolist: (todoId: string) => void,
    setTodolistsFilterValue: (todoId: string, filter: FilterType) => void,
    setNewTodolistsTitleValue: (todoId: string, newTodolistTitleValue: string) => void
}

export const TodoList: React.FC<TodosPropsType> = React.memo((props) => {
    console.log('TODOLIST')
    const tasks = useSelector<RootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch()

    const addNewTask = useCallback((todoId: string, taskTitle: string) => {
        dispatch(addNewTaskAC(todoId, taskTitle))
    }, [])
    const removeTask = useCallback((todoId: string, taskId: string) => {
        dispatch(removeTaskAC(todoId, taskId))
    }, [])
    const setNewTaskStatus = useCallback((todoId: string, taskId: string, isDone: boolean) => {
        dispatch(setNewTaskStatusAC(todoId, taskId, isDone))
    }, [])
    const setNewTaskTitleValue = useCallback((todoId: string, taskId: string, newTaskTitleValue: string) => {
        dispatch(setNewTaskTitleValueAC(todoId, taskId, newTaskTitleValue))
    }, [])

    const onClickDeleteTodo = useCallback(() => {
        props.deleteTodolist(props.todoId)
    }, [])
    const onClickSetAllFilterValue = () => props.setTodolistsFilterValue(props.todoId, FilterType.All)
    const onClickSetActiveFilterValue = () => props.setTodolistsFilterValue(props.todoId, FilterType.Active)
    const onClickSetCompletedFilterValue = () => props.setTodolistsFilterValue(props.todoId, FilterType.Completed)

    const addNewTaskItem = useCallback((newTaskTitle: string) => {
        addNewTask(props.todoId, newTaskTitle)
    }, [])
    const onChangeSetTodoTitleValue = useCallback((newTodoTitleValue: string) => {
        props.setNewTodolistsTitleValue(props.todoId, newTodoTitleValue)
    }, [])

    return (
        <Grid item>
            <Paper>
                <div className={tdStyle.todo}>
                    <div className={tdStyle.todoItem}>
                        <div className={tdStyle.titleBtn}>
                            <h3 className={tdStyle.todoTitle}>
                                <EditableSpan
                                    title={props.todoTitle}
                                    onChangeEditableSpan={onChangeSetTodoTitleValue}
                                />
                            </h3>
                            <IconButton onClick={onClickDeleteTodo}>
                                <Delete
                                    className={tdStyle.deleteTodoBtn}
                                />
                            </IconButton>
                        </div>
                        <div className={tdStyle.aif}>
                            <AddItemForm
                                addNewItem={addNewTaskItem}
                            />
                        </div>
                        <div className={tdStyle.tasks}>
                            <Tasks
                                todoId={props.todoId}
                                tasks={filteredTasks(tasks, props.todoId, props.filter)}
                                removeTask={removeTask}
                                setNewTaskStatus={setNewTaskStatus}
                                setNewTaskTitleValue={setNewTaskTitleValue}
                            />
                        </div>
                        <div className={tdStyle.filterBtns}>
                            <Button
                                variant={props.filter === 'all' ? 'contained' : 'outlined'} color={'primary'}
                                className={props.filter === 'all' ? tdStyle.allBtn + tdStyle.defaultFilterBtn : tdStyle.defaultFilterBtn}
                                onClick={onClickSetAllFilterValue}
                            >All
                            </Button>
                            <Button
                                variant={props.filter === 'active' ? 'contained' : 'outlined'} color={'secondary'}
                                className={props.filter === 'active' ? tdStyle.activeBtn + tdStyle.defaultFilterBtn : tdStyle.defaultFilterBtn}
                                onClick={onClickSetActiveFilterValue}
                            >Active
                            </Button>
                            <Button
                                variant={props.filter === 'completed' ? 'contained' : 'outlined'}
                                color={'success'}
                                className={props.filter === 'completed' ? tdStyle.completedBtn + tdStyle.defaultFilterBtn : tdStyle.defaultFilterBtn}
                                onClick={onClickSetCompletedFilterValue}
                            >Completed
                            </Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </Grid>
    );
});