const initialState = { count: 0 }; // Initial state of the app declared

// Action functions created
function increment(state) {
  return { count: state.count + 1 };
}

function decrement(state) {
  return { count: state.count - 1 };
}

function reset() {
  return { count: 0 };
}

// Store function
function createStore(initialState) {
  // state variable is created to hold the current state of the store
  let state = initialState;
  // listeners array holds callbacks for when the store changes
  let listeners = [];

  return {
    // This method returns the current state of the store
    getState: () => state,
    // dispatch processes actions and updates the state
    dispatch: (action) => {
      switch (action.type) {
        // calls the increment function
        case "INCREMENT":
          state = increment(state);
          break;
        // calls the decrement function
        case "DECREMENT":
          state = decrement(state);
          break;
        // calls the reset function
        case "RESET":
          state = reset();
          break;
        default:
          break;
      }
      // Notify any listeners of the change in state
      listeners.forEach((listener) => listener());
    },
    // subscribe method to add listeners
    subscribe: (listener) => {
      listeners.push(listener);
      // Return and unsubscribe function
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
  };
}

//Establishes a store for managing the application state, starting with the provided initial state that it takes as a parameter
const store = createStore(initialState);

store.subscribe(() => {
  console.log("State updated:", store.getState());
});

// Scenario 1: Initial State Verification
console.log("Scenario 1: Initial State Verification");
console.log("Initial state:", store.getState()); // { count: 0 }

// Scenario 2: Incrementing the Counter
console.log("Scenario 2: Incrementing the Counter");
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" }); // { count: 2 }

// Scenario 3: Decrementing the Counter
console.log("Scenario 3: Decrementing the Counter");
store.dispatch({ type: "DECREMENT" }); // { count: 1 }

// Scenario 4: Resetting the Counter
console.log("Scenario 4: Resetting the Counter");
store.dispatch({ type: "RESET" }); // { count: 0 }
