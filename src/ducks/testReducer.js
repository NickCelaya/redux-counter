const TEST ="TEST"

const nickState = {
  number: 11
}

export default function reducer(state=nickState, action){
  console.log("I fired", state, action);
  switch(action.type){
    case TEST:
    console.log(Object.assign({}, state, {number: action.payload}));

    return Object.assign({}, state, {number: action.payload})


  default:
  return state
  }
}

export const test = function(newNumber){
  return{
    type: TEST,
    payload: newNumber
  }
}
