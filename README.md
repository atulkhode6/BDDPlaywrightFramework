# BDD Playwright Framework

This project is a Behavior-Driven Development (BDD) test automation framework built with Playwright and Gherkin-style feature files.

It is designed to validate web application flows using readable scenarios, reusable step definitions, and a structured page-object style approach.

## Features

- Playwright-based browser automation
- BDD scenarios written in `.feature` files
- TypeScript support
- Environment-specific configuration via `.env` files
- Allure reporting integration
- Easy execution through npm scripts

## Tech stack

- Node.js
- Playwright
- Playwright BDD
- TypeScript
- Allure
- dotenv

## Prerequisites

Before running the tests, make sure you have:

- Node.js 18 or newer
- npm
- A browser supported by Playwright

## Installation

```bash
npm install
```

## Environment configuration

The project loads environment-specific settings from the `env` folder.

Example files:

- `env/.env.dev`
- `env/.env.staging`

The active environment is set through the `ENV` variable. If not provided, it defaults to `dev`.

## Running tests

Run the smoke test in the default development environment:

```bash
npm run test:dev
```

Run the suite in the staging environment:

```bash
npm run test:staging
```

Generate the Allure report:

```bash
npm run allure:generate
```

Open the generated report:

```bash
npm run allure:open
```

## Project structure

```text
BDDPlaywrightFramework/
├── env/                   # Environment variables for each environment
├── features/              # Gherkin feature files
├── src/
│   ├── fixtures/          # BDD fixtures and test setup
│   ├── pages/            # Page object classes
│   ├── steps/            # Step definitions
│   └── utils/            # Helper utilities
├── utils/                 # Shared config utilities
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Example feature

The project includes a sample authentication scenario:

```gherkin
Feature: Authentication Checks

Scenario: Verify error message for locked out user
  Given I navigate to the login view
  When I execute login with "locked_out_user" and "secret_sauce"
  Then I see the authentication error message
```

## Notes

- The project uses a `pretest` script that generates BDD test files before execution.
- The default base URL is configured in the application config and can be overridden with environment variables.
