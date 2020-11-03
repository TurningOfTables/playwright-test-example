# playwright-test-example
A fully working, bare bones example project for [Playwright](https://playwright.dev) tests with an included sample site and a few basic tests that run against it.

The tests can be found at ```./test```

The sample site can be found at ```./sample_site```

## Installation
```npm i```

## Run Tests (CLI)
```npm run test```

## Test Runner
As Playwright doesn't specifically come with more than a very basic test runner, I added [Jest](https://jestjs.io) as the test runner, set to verbose mode. In addition I added [Chai](https://www.chaijs.com) for an assertion library.

## Sample Site
The included sample site in ./sample_site is a simple, static HTML page with a CSS and JS file. I added a super-simple Express server to start the site locally so it's available at http://localhost:3000

Note that the included site has a simulated login functionality, but it doesn't actually do anything - the password is hardcoded and not intended to be real authentication.
