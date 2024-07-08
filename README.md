# Higher Order Functions

- Functions that take other functions as parameters
- The function being passed into another function is called a callback function
- A function is just a set of directions that can be run later
- an anonymous function is a function without a name
  - used for one-time use
  - CAN'T BE INVOKED LATER
  - (param1, param2) => { code }

## Array Method Examples

- forEach -> executes the provided callback function on each item in an array
  - DOES NOT return anything
- find -> gives back the FIRST item where the callback function RETURNS TRUE
- filter -> creates a NEW array with ALL items where the callback function RETURNS TRUE
- map -> creates a NEW array populated with what is RETURNED from the callback function on each item
- reduce -> executes a callback function that includes a REDUCER to RETURN a single value
  - takes a callback function AND an intial value for the accumulator
  - the callback function takes in an accumulator AND a current value