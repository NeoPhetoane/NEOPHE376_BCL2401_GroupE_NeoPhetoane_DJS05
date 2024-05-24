const initialState = { count: 0 }; //Initial state of the app declared

//Action functions created
function increment(state) {
  return { count: state.count + 1 };
}

function decrement(state) {
  return { count: state.count - 1 };
}

function reset() {
  return { count: 0 };
}
//Store function
function createStore(initialState) {
  // state variable is created to hold the current state of the store
  let state = initialState;
  //listeners array holds callbacks for when the store changes
  let listeners = [];

  return {
    // This method returns the current state of the store
    getState: () => state,
    // dispatch processes actions and updates the state
    dispatch: (action) => {
      switch (action.type) {
        //calls the increment function
        case "INCREMENT":
          state = increment(state);
          break;
          //calls the decrement function
        case "DECREMENT":
          state = decrement(state);
          break;
        default:
          break;
      }
      // Notify any listeners of the change in state
  listeners.forEach(listener => listener());
    },
  };
}
