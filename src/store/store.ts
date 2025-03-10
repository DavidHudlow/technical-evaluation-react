import { createStore } from 'redux';
import { clownReducer } from './reducers';

const store = createStore(clownReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;
