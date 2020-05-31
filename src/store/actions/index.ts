/**
 * Base redux store constants
 */
export const STORE_ACTIONS = {
    EXAMPLE:"EXAMPLE",
};

/**
 * Base Action definition
 */
export interface IAction {
    payload?: any;
    type: string;
}