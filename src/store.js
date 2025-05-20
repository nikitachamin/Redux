import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './store/root-reducer';
import { loadState, saveState } from './store/LocalStorage';
import { todoReducer } from './store/todos/todos-reducer';



export const configureStore = () => {
    const persistedState = loadState();

    const store  = createStore(rootReducer,persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    store.subscribe(() => {
        saveState({
            todoReducer: store.getState().todoReducer,
        })
    });
    
    return store;
}


