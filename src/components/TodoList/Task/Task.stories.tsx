import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Task} from './Task';

const meta: Meta<typeof Task> = {
    title: 'TODOLISTS/Task',
    component: Task,
    tags: ['autodocs'],
    args: {
        setTaskStatus: action('Status changed inside Task'),
        changeEditableSpan: action('Title changed inside Task'),
        removeTask: action('Remove Button clicked changed inside Task'),
        task: {taskId: '12wsdewfijdei', taskTitle: 'JS', isDone: false},
        todoId: 'fgdosrg8rgjuh'
    }
};

export default meta;
type Story = StoryObj<typeof Task>;

export const TaskIsNotDoneStory: Story = {};

export const TaskIsDoneStory: Story = {
    args: {
        task: {taskId: '12wsdewfijdei2343', taskTitle: 'CSS', isDone: true},
    },
};
