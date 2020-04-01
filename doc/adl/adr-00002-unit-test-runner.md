# ADR 2: Jest as test runner for unit tests

## Status

Accepted

## Context

### Key drivers

- readability - tests should be read like a human language
- easy to use - everybody should be able to write tests
- fast - tests should execute quickly in order to create a short feedback loop and allow for TDD
- widely known - a runner chosen should have strong community support and be popular among developers

### Other factors

Code is written in TypeScript.

## Decison

We will use https://jestjs.io with https://kulshekhar.github.io/ts-jest

## Consequences

Jest allows for human readable tests structure and organization using describe and it keywords.

Setup of jest is easy and allowed it to be configured as npm script running whatever is necessary. On top of that there is a VS Code extension that allows for short feedback loop showing tests results inline with code.

Ability to run tests in parallel accounts for fast execution.

## Alternative Solutions

AVA - found several articles documenting moving away from AVA in favour of Jest in order to save on tests suite execution time.
Tape - very simple testing framework, not popular. Build with simplicity in mind hence has no setup and teardown functions nor functions for using spec language.

## Tags

tests process automation
