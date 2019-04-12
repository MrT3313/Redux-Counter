
// IMPORT ACTION CREATORS
  import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

// CREATE REDUCER 
  // -- function
  // -- takes in state & action as arguments
  // -- returns a state object
export default (state = initialState, action) => {
  // DEBUGGING
    console.log(action)
  
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: action.payload - 1
      }
    default:
      return state;
  }
};


// *** CONNECTIONS *** //

// EXPORT