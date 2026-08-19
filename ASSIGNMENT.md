# Assignment 1 — Automation Logic Challenge

## Objective

Practice the TypeScript programming concepts required for automation engineering.

You are given:

- Method signatures
- Comments describing expected behavior
- Test cases containing expected results

Your job is to implement the methods.

## Rules

1. Do not change the expected values in the tests.
2. Do not delete test cases.
3. Do not change a failing `expect()` just to make the test pass.
4. You may use loops, conditions, operators, strings and arrays as required.
5. Keep your implementation readable.
6. Run the test suite frequently.

## Required

### Level 1
Complete:
- `StringUtils.reverse()`
- `StringUtils.capitalize()`
- `NumberUtils.add()`
- `NumberUtils.subtract()`
- `NumberUtils.isEven()`

### Level 2
Complete:
- `StringUtils.isPalindrome()`
- `StringUtils.countWords()`
- `StringUtils.countCharacter()`
- `NumberUtils.multiply()`
- `NumberUtils.divide()`
- `NumberUtils.remainder()`
- `NumberUtils.getLarger()`
- `NumberUtils.getSmaller()`
- `ConditionUtils.isAdult()`
- `ConditionUtils.isTestPassed()`
- `ConditionUtils.isValidScore()`
- `ConditionUtils.getRating()`
- `ArrayUtils.getLargestNumber()`
- `ArrayUtils.getSum()`
- `ArrayUtils.countEvenNumbers()`

### Level 3 — Automation-oriented
Complete:
- `ConditionUtils.hasValidCredentials()`
- `ConditionUtils.isAnyFlagEnabled()`
- `ConditionUtils.areAllFlagsEnabled()`
- `ArrayUtils.getItemsStartingWithA()`
- `ArrayUtils.getValuesGreaterThan()`
- `TestDataUtils.getActiveUsers()`
- `TestDataUtils.getAdmins()`
- `TestDataUtils.getActiveAdmins()`
- `TestDataUtils.getEligibleUsers()`
- `TestDataUtils.getInactiveUserNames()`

### Level 4 — Bonus
Complete:
- `DuplicateTests.findDuplicates()`

## Suggested workflow

Start with:

```bash
npm test
```

Then implement one function at a time.

For each function:

1. Read the comment.
2. Read all test cases.
3. Change `xit()` to `it()` for the case you want to activate.
4. Implement the method.
5. Run the tests.
6. Analyze failures.
7. Fix the implementation.
8. Move to the next case.

## Concepts you should practice

- `let` and `const`
- `string`, `number`, `boolean`
- Arrays
- Objects
- Functions and methods
- Classes
- `if / else if / else`
- `for`
- `for...of`
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`
- Comparison operators: `>`, `<`, `>=`, `<=`, `===`, `!==`
- Logical operators: `&&`, `||`, `!`
- String methods
- Array methods
- Import/export
- Jest `describe`, `it`, `expect`, `beforeEach`

## Connection to automation

Think about where these concepts appear in real automation:

- Strings -> URLs, titles, messages, test data
- Arrays -> table rows, test data, API results
- Conditions -> validation and branching
- Loops -> data-driven tests
- Objects -> user/test data
- Functions -> reusable automation logic
- Classes -> Page Objects and framework components
- Assertions -> validating expected behavior
