import { IAction, STORE_ACTIONS } from "../actions";

export const exampleReducer = (state = {}, action: IAction) => {
    switch (action.type) {
        case STORE_ACTIONS.EXAMPLE:
            return action.payload;
        default:
            return state;
    }
};