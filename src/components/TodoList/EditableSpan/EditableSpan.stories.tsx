import React from 'react'
import {EditableSpan} from "./EditableSpan";
import {action} from '@storybook/addon-actions'

export default {
    title: 'EditableSpan Component',
    component: EditableSpan,
}

const changeCallback = action('Button Add was pressed inside the form');
export const EditableSpanBaseExample = (props: any) => <EditableSpan title={'Start title'} onChangeEditableSpan={changeCallback}/>