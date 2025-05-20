import { combineReducers } from "redux";
import { todoReducer } from "./todos/todos-reducer";
// import { filters } from "./filters/filter-reducer";

export const rootReducer = combineReducers({
    todoReducer,
    // filters
})