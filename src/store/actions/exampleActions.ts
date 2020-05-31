import { IAction, STORE_ACTIONS } from ".";

export const exempleAction = (val: any): IAction => (
    {
        type: STORE_ACTIONS.EXAMPLE,
        payload: val,
    }
);