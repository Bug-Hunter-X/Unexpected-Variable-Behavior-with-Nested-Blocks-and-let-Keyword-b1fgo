# Unexpected Variable Behavior with Nested Blocks and let Keyword in JavaScript

This repository demonstrates a common source of confusion in JavaScript related to variable scoping with the `let` keyword.

## The Bug
The issue arises when using nested blocks within a function, and these blocks declare variables with the same name.  Due to JavaScript's block scope, each block creates a new variable, independent from variables of the same name in other blocks or outer scopes. This can lead to unexpected outputs if not carefully considered.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and observe the code. 
3. Run the `bug.js` file using a JavaScript interpreter (e.g., Node.js).
4. Note that the output is not what might be initially expected based on a potential misunderstanding of scope.

## Solution
The solution in `bugSolution.js` demonstrates how to avoid such problems: be mindful of variable names and how scoping works.  Consider renaming variables to enhance code readability and avoid accidental shadowing.