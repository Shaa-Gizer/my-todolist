import React, {useCallback} from 'react';
import tdStyle from '../../styles/TodoList.module.css'
import {AddItemForm} from "./AddItemForm/AddItemForm";
import {EditableSpan} from "./EditableSpan/EditableSpan";
import {Button, Grid, IconButton, Paper} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {FilterType, TaskType} from "../../types";
import {addNewTaskAC, removeTaskAC, setNewTaskStatusAC, setNewTaskTitleValueAC,
} from "../../redux/reducers/DimychVersion/tasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {Task} from "../Task/Task";
import {RootStateType} from "../../redux/store";
import {filteredTasks} from "../../helpers";
import tStyle from "../../styles/Tasks.module.css";

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
    const tasks = useSelector<RootStateType, TaskType[]>(state => state.tasks[props.todoId])
    const dispatch = useDispatch()

    const addNewTask = useCallback((todoId: string, taskTitle: string) => {
        dispatch(addNewTaskAC(todoId, taskTitle))
    }, [dispatch]);
    const removeTask = useCallback((taskId: string) => {
        dispatch(removeTaskAC(props.todoId, taskId))
    }, [dispatch, props.todoId]);
    const setTaskStatus = useCallback((taskId: string, isDone: boolean) => {
        dispatch(setNewTaskStatusAC(props.todoId, taskId, isDone))
    }, [dispatch, props.todoId]);
    const changeEditableSpan = useCallback((taskId: string, newTaskTitleValue: string) => {
        dispatch(setNewTaskTitleValueAC(props.todoId, taskId, newTaskTitleValue))
    }, [dispatch, props.todoId]);

    const onClickDeleteTodo = useCallback(() => {
        props.deleteTodolist(props.todoId)
    }, [props.deleteTodolist, props.todoId]);
    const onChangeSetTodoTitleValue = useCallback((newTodoTitleValue: string) => {
        props.setNewTodolistsTitleValue(props.todoId, newTodoTitleValue)
    }, [props.setNewTodolistsTitleValue, props.todoId]);

    const onClickSetAllFilterValue = useCallback(() => props.setTodolistsFilterValue(props.todoId, FilterType.All),
        [props.setTodolistsFilterValue, props.todoId]);
    const onClickSetActiveFilterValue = useCallback(() => props.setTodolistsFilterValue(props.todoId, FilterType.Active),
        [props.setTodolistsFilterValue, props.todoId]);
    const onClickSetCompletedFilterValue = useCallback(() => props.setTodolistsFilterValue(props.todoId, FilterType.Completed),
        [props.setTodolistsFilterValue, props.todoId]);

    const addNewTaskItem = useCallback((newTaskTitle: string) => {
        addNewTask(props.todoId, newTaskTitle)
    }, [addNewTask, props.todoId]);


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
                            {filteredTasks(tasks, props.filter).length ?
                                filteredTasks(tasks, props.filter).map(t => <Task
                                    key={t.taskId}
                                    todoId={props.todoId}
                                    task={t}
                                    removeTask={removeTask}
                                    setTaskStatus={setTaskStatus}
                                    changeEditableSpan={changeEditableSpan}
                                />)
                                : <span className={tStyle.errorMessage}>No tasks!</span>}
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