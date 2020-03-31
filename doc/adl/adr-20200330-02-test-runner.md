# Choice of the test runner

## Status
Accepted

## Context
Key drivers:
- readability
- easy to use
- fast
- widely known

Code is written in TypeScript.

## Decison
https://jestjs.io + https://kulshekhar.github.io/ts-jest

## Consequences
Readable - using spec definitions and describe/it keywords.
Easy - easy setup, run with one command, built-in coverage and has integration for VSCode.
Fast - whole suite of tests runs under 2-3s.

