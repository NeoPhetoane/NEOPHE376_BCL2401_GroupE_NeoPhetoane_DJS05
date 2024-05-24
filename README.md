# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

# Overview

This project is a tally ap that focuses on state management using Redux inspired store. It implements the use of subscribe, listeners and dispatch to adhere to the redux style.

# - How to run this code.

To begin with, this code in terminal based since there is no UI within it, therefore the terminal will be required to render it.

1. firstly you will require node js to run
2. Then once the project is opened, you will type 'node index.js to run the code so the console.logs are rendered to the console.

# A brief overview of my approach.

The main function of the application is the createStore function, which is responsible for managing the application's state. This state is updated when actions, such as "INCREMENT", "DECREMENT", or "RESET", are dispatched to the store.

The application defines reducer functions (increment, decrement, and reset) that modify the state in response to the dispatched actions. Then the updated state is then used to display the current value of the counter on the screen.

# The challenges I faced and how I overcame them

1. I strugglled a bit with the parameters, more specifically "state" when inserting it into the action functions before declaring it and then assigning it to initialStait later on. I overcame this by consulting my fellow students to explain the concept.

2. SubScribers : The concept was a bit confusing to me but with more reading I understood that it allows listeners to subscribe to state changes. The subscribe method allows listeners to register callbacks that are invoked whenever the state changes.








**Starter-Code Readme**
In this challenge, you will venture into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. Your primary goal is to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, you'll subscribe to state updates and log them to the console, highlighting the power of state management in applications.

## Objective

Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App. Your implementation will not involve UI rendering; instead, it will use console logs to demonstrate state management effectively.

Observer Pattern resource from Refactoring Guru: https://refactoring.guru/design-patterns/observer

## User Stories (Gherkin Syntax)

Your challenge will encompass the following scenarios, tested through your store's implementation:

### SCENARIO 1: Initial State Verification

```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter

```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter

```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter

```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

## Requirements

- **Implement a Global Store**: Create a Redux-inspired store that holds the state of the tally counter. The store should have the ability to dispatch actions and subscribe to state changes.
- **State Management Functions**:
  - **getState**: Returns the current state.
  - **dispatch**: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
  - **subscribe**: Accepts a function that gets called whenever the state changes. This function should log the new state to the console.
- **No UI Rendering**: This challenge focuses on state management without the complexity of UI rendering. All state changes should be observable through console logs.
- **Functional Programming Principles**: Draw upon functional programming concepts as illustrated in the reference videos. While Redux is the inspiration, you're encouraged to apply these principles creatively in your implementation.

## Submission Guidelines

Your submission should consist of a JavaScript file(s) that encapsulate your Redux-inspired store and the logic for dispatching actions and subscribing to changes. Include a README.md file explaining:

- How to run your code.
- A brief overview of your approach.
- Any challenges you faced and how you overcame them.

Ensure your code is well-commented and adheres to best practices for readability and maintainability.

## Evaluation Criteria

- **Correctness**: Your implementation should correctly handle the scenarios as outlined in the user stories.
- **Code Quality**: Use of functional programming principles, clear naming conventions, and code organization.
- **Documentation**: Clarity of your approach and reflections in the README.md.

This challenge is an excellent opportunity to demonstrate your understanding of state management concepts and functional programming principles. Good luck!
