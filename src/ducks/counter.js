// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;


//string constants
const CHANGE_NUMBER = "CHANGE_NUMBER"

// state
const initialState = {
  number: 15
}



//reducers
export default function reducer(state=initialState, action){
  console.log("friday", action);
  switch(action.type){
    case CHANGE_NUMBER:

    return Object.assign({}, state, {number: action.payload})


  default:
  return state
  }
}



//action creators
export const changeNumber = function(newNumber){
  return {
    type: CHANGE_NUMBER,
    payload: newNumber
  }
}
