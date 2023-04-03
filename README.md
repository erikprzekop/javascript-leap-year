## Setup
Install node and npm if you haven't already.  It is recommended that you
use a node version manager to do so.  The following two lines should install
the current version of node, but there are several install guides if you prefer more information:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install node
```

*[Skip this step if you cloned the repo]* Create a project and initialize node:

```
mkdir tdd-node && cd tdd-node
npm init
```

Initialize the project, and install the tools (you may already have node types)

```
npm i --savedev @types/node
npm i --savedev jest
```


*[Skip this step if you cloned the repo]* Update package.json (the "test" line in "scripts") to read:

```
scripts": {
    "test": "jest"
},
```

## TDD Workflow
Test Driven Development (TDD) is much more a design technique than a way to ensure test coverage.  TDD can be summarized as "Red, Green, Refactor".
- Red - write a test that will force you to write some code to make it pass.  You should actually run the test, and make sure you get a failure (red) result before continuing.
- Green - write the simplest code you can to make the test pass, and don't add any code that doesn't help the test pass.  Naive implementations are best for this step - it's better to write bad code quickly than try to write perfect code, because the key step is...
- REFACTOR - this is what ties TDD together.  It is much, MUCH easier to refactor existing code than to get it right the first time.  Refactor your code, and refactor your tests before continuing.

## TDD Problem Statement
For today's exercise, let's test-drive a leap year calculator.

Write a function that returns true or false depending on whether its input integer is a leap year or not.

A leap year is defined as one that is divisible by 4, but is not otherwise divisible by 100 unless it is also divisible by 400.

For example, 2001 is a typical common year and 1996 is a typical leap year, whereas 1900 is an atypical common year and 2000 is an atypical leap year.

