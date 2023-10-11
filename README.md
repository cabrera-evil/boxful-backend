# Boxful Backend API

## Description

This is the official API for the Boxful Backend, designed for a technical test. It provides endpoints and functionality related to orders and packages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

To get started with the Boxful Backend API, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/cabrera-evil/boxful-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd boxful-backend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

Before running the API, make sure to set up the necessary configuration, environment variables, and database connections as required by the [NestJS configuration](https://docs.nestjs.com/techniques/configuration) and the packages used.

To start the development server, run:

```bash
npm run start:dev
```

To start the production server, use the docker-compose file (make sure to copy the content of `.env.example` to `.env` first):

You can use the following .env file:

```bash
MONGO_URI=mongodb://database:27017/boxful
PORT=3000
```
Then run:

```bash
docker-compose up -d
```

Before use the API, you can restore the database with the following command which executes a bash script that restores the database from a dump file:

```bash
./data/restore.sh
```

The API will be available at `http://localhost:3000` by default, to access the documentation you must use `http://localhost:3000/api`.

## Scripts

Here are the available scripts for this project:

- `build`: Build the NestJS application.
- `format`: Format source code files using Prettier.
- `start`: Start the application.
- `start:dev`: Start the application in development mode with watch.
- `start:debug`: Start the application in debug mode with watch.
- `start:prod`: Start the production version of the application.
- `lint`: Run ESLint and fix linting issues.
- `test`: Run Jest tests.
- `test:watch`: Run Jest tests in watch mode.
- `test:cov`: Run Jest tests with coverage reporting.
- `test:debug`: Run Jest tests in debug mode.
- `test:e2e`: Run end-to-end tests using the Jest configuration from `jest-e2e.json`.

## Dependencies

The main dependencies for this project are as follows:

- `@nestjs/common`: NestJS core functionality.
- `@nestjs/config`: Configuration handling for NestJS.
- `@nestjs/mongoose`: MongoDB integration for NestJS.
- `class-transformer`: Serialization/deserialization library.
- `class-validator`: Validation library.
- `mongoose`: MongoDB driver for Node.js.
- `rxjs`: Reactive Extensions for JavaScript.

## Dev Dependencies

Dev dependencies used in this project are as follows:

- `@nestjs/cli`: NestJS command-line tools.
- `@nestjs/testing`: Testing utilities for NestJS.
- `@types/express`: TypeScript type definitions for Express.
- `@types/jest`: TypeScript type definitions for Jest.
- `@types/node`: TypeScript type definitions for Node.js.
- `@types/supertest`: TypeScript type definitions for Supertest.
- `@typescript-eslint/eslint-plugin`: ESLint plugin for TypeScript.
- `@typescript-eslint/parser`: ESLint parser for TypeScript.
- `eslint`: Linting tool.
- `eslint-config-prettier`: Prettier ESLint configuration.
- `eslint-plugin-prettier`: ESLint plugin for Prettier integration.
- `jest`: Testing framework.
- `prettier`: Code formatting tool.
- `source-map-support`: Sourcemap support for Node.js.
- `supertest`: HTTP assertion library.
- `ts-jest`: Jest TypeScript support.
- `ts-loader`: TypeScript loader for Webpack.
- `ts-node`: TypeScript execution environment.
- `tsconfig-paths`: Load modules using tsconfig paths.
- `typescript`: TypeScript compiler.

## Testing

To run the tests for this project, you can use the following commands:

- `npm run test`: Run all unit tests.
- `npm run test:watch`: Run tests in watch mode.
- `npm run test:cov`: Run tests and generate code coverage reports.
- `npm run test:e2e`: Run end-to-end tests.

## Project Structure

The project is organized as follows:

- `src/common`: Common utilities and types.
- `src/config`: Configuration files and utilities.
- `src/modules/orders`: Functionality related to orders, including controllers, services, DTOs, and entities.
- `src/modules/packages`: Functionality related to packages, including controllers, services, DTOs, and entities.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.