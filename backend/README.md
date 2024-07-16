# Backend

This project is the backend part of the homework for the Docker lecture.

## Initial Setup

Commands to perform the initial setup of the project.

### `npm install`

Installs project dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run serve`

Runs the built version of the project from the `build` folder.

## Configuration

This application can be configured using environment variables.\
They can be also set in the `.env` file for the development.

| Variable          | Default Value | Description            |
| ------------------|---------------| ---------------------- |
| HTTP_PORT         | `4001`        | Web server port        |
| POSTGRES_HOST     | `localhost`   | Database host address  |
| POSTGRES_PORT     | `5432`        | Database port          |
| POSTGRES_USER     | `postgres`    | Database user          |
| POSTGRES_PASSWORD | `secret`      | Database user password |
| POSTGRES_DATABASE | `postgres`    | Database name          |

## Hints

When using Docker, the `POSTGRES_HOST` should be set to the value of the Docker database service.
