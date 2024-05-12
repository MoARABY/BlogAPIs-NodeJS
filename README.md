# Blog APIs - Backend

This is a Node.js application that provides APIs for a blog app. It allows users to manage users, posts, categories, and file uploads.

## Features

- User management (registration, login, profile update)
- User creation, retrieval, deletion, and update
- Post creation, retrieval, deletion, and reaction (like, unlike)
- Category creation and retrieval
- File upload

## Technologies Used

- Express: Fast and minimalist web application framework for Node.js
- Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js
- Dotenv: Zero-dependency module for loading environment variables from a .env file
- Multer: Middleware for handling multipart/form-data, primarily used for file uploads
- Helmet: Middleware for securing Express apps by setting various HTTP headers
- Morgan: HTTP request logger middleware for Node.js
- Bcrypt: Library for hashing passwords
- Cors: Middleware for enabling cross-origin resource sharing
- Nodemon: Tool for automatically restarting the Node.js application when file changes are detected
- Swagger-autogen: Tool for generating Swagger documentation based on the application's routes
- Swagger-ui-express: Middleware for serving the Swagger UI interface for API documentation

## Project Structure

The project follows a modular approach, with separate routers for user authentication, user management, and post management. The database connection is implemented using the `dbConnection` module.

## Getting Started

To run the application, follow these steps:

1. Clone the repository: `git clone https://MoARABY/blogAPIs.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## API Documentation

The API documentation is available at `/api-docs`, which serves the Swagger UI interface. It provides detailed information about the available endpoints, request/response schemas, and allows you to interact with the APIs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Multer](https://www.npmjs.com/package/multer)
- [Helmet](https://helmetjs.github.io/)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Cors](https://www.npmjs.com/package/cors)
- [Nodemon](https://nodemon.io/)
- [Swagger-autogen](https://www.npmjs.com/package/swagger-autogen)
- [Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
