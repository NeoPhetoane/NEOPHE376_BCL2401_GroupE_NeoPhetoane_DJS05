const initialState = { count: 0 };  //Initial state of the app declared

//Counting functions

// function reducer(state = initialState, actions) {
//     switch (actions.type) {
//       case action.INCREMENT:
//         return { count: state.count + 2 };
//       case action.DECREMENT:
//         return { count: state.count - 1 };
//       case action.RESET:
//         return { count: 0 };
//       default:
//         return state;
//     }
//   }


//Action functions created
  function increment(state) {
    return { count: state.count + 1 }
}
  
function decrement(state) {
    return { count: state.count - 1 }
}

function reset() {
    return {count: 0}
}