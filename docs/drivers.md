# Architectural Drivers

## Testability

High testability is expected from the implementation.

### Fast execution of unit tests

For unit tests to have value and allow for TDD process, those have to execute fast.

|        | Execution time |
| ------ | -------------- |
| Actual | 3s             |
| Limit  | 2s             |
| Goal   | 2s             |
| Wish   | < 1s           |

## Extendability

There should be short feedback loop.

### Short delivery pipeline

Project should build and deploy to staging in short time.

|       | Build and deployment time |
| ----- | ------------------------- |
| Limit | 5 minutes                 |
| Goal  | 3 minutes                 |
| Wish  | 2 minutes                 |
