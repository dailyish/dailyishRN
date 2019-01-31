import { combineReducers } from 'redux';
import HabitsReducer from './reducers/HabitsReducer';

// Redux combines the reducers together
export default combineReducers({
  habits: HabitsReducer
});
