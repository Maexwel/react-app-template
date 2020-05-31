import { combineReducers } from "redux";
import { exampleReducer } from './exampleReducer';

/**
 * Base reducer for the whole app.
 */
const appReducer = combineReducers({
    exampleReducer,
});
export default appReducer;