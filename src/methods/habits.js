// This section needs to be moved to call from firebase
// -----
import data from '../data/habits.json';
// ----

// Enter actions here
const HABIT_ADDED = 'habit_added';

// Set initial state
const INITIAL_STATE = data;

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HABIT_ADDED:
      // make new object TODO: nothing has changed here though
      return { ...state };
    default:
      return state;
  }
}

// Action Creators
export function emailChanged(text) {
  return {
    type: HABIT_ADDED,
    payload: text
  };
}
