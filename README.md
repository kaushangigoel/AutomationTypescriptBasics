# Automation TypeScript Basics

A Day 1 practice project for automation engineers.

## Goal

Practice the programming concepts needed for Playwright automation:

- Variables and data types
- Strings
- Arrays
- Functions and classes
- `if / else`
- Loops
- Arithmetic operators
- Comparison operators
- Logical operators
- Import/export
- Reading tests and implementing expected behavior
- Basic Jest test execution

## Project model

Each exercise has two parts:

```text
tests/       -> What behavior is expected?
src/         -> How is that behavior implemented?
```

Do not change the expected values in the tests to make them pass.

## Setup

```bash
npm install
```

## Run tests

```bash
npm test
```

Run in watch mode:

```bash
npm run test:watch
```

Run with coverage:

```bash
npm run test:coverage
```

## Suggested learning flow

1. Run the tests before changing anything.
2. Read the test case and the method comment.
3. Implement one method.
4. Change one `xit()` to `it()`.
5. Run the test.
6. Fix the implementation if it fails.
7. Continue to the next method.

## Exercise levels

### Level 1 — Warm-up
- String reverse
- Capitalize
- Addition/subtraction
- Even number

### Level 2 — Core
- Palindrome
- Word counting
- Comparisons
- Ratings
- Array calculations

### Level 3 — Automation-oriented
- Test result processing
- User/test-data filtering

### Level 4 — Challenge
- Duplicate test names

## Day 1 assignment

Complete all Level 1 and Level 2 methods.

Complete at least the Level 3 methods marked in the assignment section of the KT.

Level 4 is a bonus challenge.

## Important

The tests are intentionally written before the implementation. Treat them as the specification.
