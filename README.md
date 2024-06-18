<h1> 
    <img src="https://ik.imagekit.io/yg7u65zz2/pngname_1__g-b8fyH6t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664085643045">
</h1>

# API: Table reservation

# Index
- [About](#-About)
- [Technologies used](#-Technologies-used)
- [How to download the project](#-How-to-download-the-project)
- [How does the api work?](#-How-does-the-api-work?)

## 🔖 About

This is the reservation **API** repository. The goal of this project is to provide an API to manage reservations, users, restaurants and tables.

---

## 🚀 Technologies used


The project was developed using the following technologies:

- [JavaScript](https://www.javascript.com)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org)
- [Jest](https://jestjs.io/)
- [MySQL](https://www.mysql.com/)
- [SQLite](https://www.sqlite.org/)

---

## 📁 How to download the project

### Requirements

- Node.js
- npm

### Installation
```bash

    # clone the repository:
    $ git clone https://github.com/biancaoliv/Api-Reserva.git

    # enter the directory:
    $ cd api-reserva

    # install the dependencies:
    $ npm install

    # configure the .env file:
    $ DB_DIALECT=postgres
      DB_USER=your_user
      DB_PASSWORD=your_password
      DB_DATABASE=api_reserva
      DB_HOST=localhost
      DB_PORT=5432
      URL_API=http://localhost:3000/
      JWT_KEY=your_secret_key

    # To start the application in development mode: 
    $ npm run dev

    # To start the application in production:
    $ npm start

```
---
## Functionalities

### Users 

- **Create User**: Creates a new user.
- **Login User**: Authenticates a user and generates a JWT token.
- **Update User**: Updates the details of an existing user.
- **List Users**: Retrieves a list of all users.
- **Delete User**: Removes a specific user.

### Restaurants

- **Create Restaurant**: Adds a new restaurant.
- **Update Restaurant**: Updates information about an existing restaurant.
- **List Restaurants**: Retrieves a list of all restaurants.
- **Delete Restaurant**: Removes a specific restaurant.

### Tables

- **Create Table**: Adds a new table to a restaurant.
- **Update Table**: Updates information from an existing table.
- **List Tables**: Retrieves a list of all tables.
- **Delete Table**: Removes a specific table.

### Reservations

- **Create Reservation**: Creates a new reservation.
- **Update Reservation**: Updates an existing reservation.
- **List Reservations**: Retrieves a list of all reservations.
- **Delete Reservation**: Removes a specific reservation.

### Simple booking

- **Create Simple Reservation**: Creates a simple reservation



## Architecture

### Models

Models represent database entities and are defined using Sequelize. They reside in the `src/models` directory.

### Controllers

Controllers process HTTP requests and call the appropriate services to handle the business logic. They are located in `src/controllers`.

### Services

Services contain business logic and communicate with repositories to access data. They are in `src/services`.

### Repositories

Repositories are responsible for interacting directly with the database using Sequelize models. They are in `src/repository`.

### Middleware

Middleware are functions that process requests before they reach the controllers. Examples include authentication and data validation. They are located in `src/middleware`.

### Settings

Application settings, such as database configuration and environment constants, are in `src/config`.

### Scripts

Useful scripts for maintenance and automation of tasks, such as local database synchronization, are in `src/scripts`.

### Testing Utilities

Utilities for testing, including mocks and helpers, are in `src/testUtils`.

## Usage Examples

### Create a User

To create a user, send a POST request to `/api/users` with the following payload:

```json
{
 "name": "Test",
 "email": "test@test.com",
 "password": "test123"
}
```


## Route Wrapper

To simplify exception handling and ensure a consistent response structure across all API routes, we use a middleware called `routeWrapper`. This middleware wraps the route functions, allowing error handling logic to be centralized.

### Implementation


The `routeWrapper` is a function that accepts a route function (`routeAction`) as an argument and returns a new asynchronous function that handles route execution and error handling. Here is the implementation:

```javascript
const routeWrapper = (routeAction) => {
 return async (request, response) => {
 try {
 const actionResult = await routeAction(request, response);
 return response.status(200).json(actionResult);
 } catch (error) {
 return response.status(error.status || 500).json({ message: error.message || 'Something went wrong' });
 }
 };
};
```
### Usage
To use routeWrapper, you wrap your route functions when defining routes. Here is an example of how to wrap a user creation route:

```javascript
const express = require('express');
const userController = require('./controllers/User.controller');
const routeWrapper = require('./middlewares/routeWrapper');

const router = express.Router();

router.post('/users', routeWrapper(userController.createUser));

module.exports = router;
```
## Thanks
I would like to thank all my developer friends who helped make this project possible and answered my questions.

Especially you, Sergio.

## Contact
- [LinkedIn](https://www.linkedin.com/in/bianca-oliv/)
- [GitHub](https://github.com/biancaoliv)
- [Email](mailto:bianca.oliv.bn@gmail.com)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Credits
💻 Developed by: Bianca Oliveira