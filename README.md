# AngularUnitTesting

Angular: Unit Testing Jasmine, Karma (Function test not the HTML)

## Benefits of Unit Testing

- Improve the design of implementaions

* start coding a feature without giving it a lot of thought to the design is a very common mistake among developers. Using unit testing is going to enforce you to think and re-think the design, and if you are using TDD the impact is even bigger.

- Allows refectoring.

* Since you already have tests existing code changes that ensure eveything is working as exprected, you can easily add your new piece of code changes with the certainty that you are not adding any bugs.

- Add new features without breaking anything.

* When you adding a new feature you can run the tests to ensure that you aint breaking any other part of the application.

- Tests are good documentaion.

- Tests make developers more confident about their work.

## Create an Angular project with jasmine and karma

Install angular-cli and create a new project:

- npm install -g @angular/cli
- ng new ANGULAR-UNIT-TESTING

* angular-cli file (Configure install NPM karma-coverage-istanbul-reporter)
* test.ts file to add Karma varibles (all codes are commented for the refferences)

## future integration

- HTML unit testing
- regression testing

### refference

https://medium.com/swlh/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4
