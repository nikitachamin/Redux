import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todos-const";

const initialState = [];
   
export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: {
            return [
                ...state,
          {
            id: Date.now(),
            title: action.title,
            completed: false,
          }
          ];
        }
        case TOGGLE_TODO : {
            return state.map((todo) => 
            todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        }
        case REMOVE_TODO : {
            return state.filter((todo) => todo.id !== action.id);
          
        }
        default: {
            return state;
        }
    }
}
