import {UserStateType} from "../../types/userTypes";

type ActionType = {
    type: string,
    [key: string]: any
}

export const userReducer = (state: UserStateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            state.age = state.age + 1;
            return state;
        case 'INCREMENT-CHILDREN-COUNT':
            state.childrenCount = state.childrenCount + 1;
            return state;
        default:
            return state;
    }
}