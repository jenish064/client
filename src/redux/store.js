import { createStore, combineReducers } from 'redux';
import themeReducer from './reducer/ThemeReducer';

const rootReducerWithTheme = combineReducers({
  themeReducer
});

// Create Redux store
const store = createStore(rootReducerWithTheme);

export default store;
