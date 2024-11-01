# URL Shortener – A Node.js, Express.js, and MongoDB Project

A streamlined URL Shortener application built with Node.js, Express.js, and MongoDB, offering secure JWT-based authentication and real-time URL analytics. This project efficiently shortens URLs into unique, manageable links, with EJS templates providing a user-friendly interface for seamless interaction.

## Project Overview

This Node.js URL Shortener simplifies lengthy URLs by converting them into concise 8-character links. Users can securely log in and manage their sessions with JWT tokens stored in cookies. The application leverages MongoDB for reliable storage of user information, shortened URLs, and visit analytics to provide valuable insights. The Express.js framework handles routing and backend processes, ensuring smooth performance and scalability.

## Key Features

- **Secure Authentication with JWT**: Allows users to sign up and log in securely, with session tokens stored in cookies for smooth access.
- **Efficient URL Shortening**: Converts any long URL into an 8-character link for easy sharing and access.
- **Built-in URL Analytics**: Tracks URL visit data, including timestamps, providing insights into usage patterns, all stored in MongoDB.
- **EJS Interface**: EJS templates render dynamic pages for user registration, login, and main pages, enhancing the user experience.

## Technologies Used

- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: A web application framework for streamlined routing and server setup.
- **MongoDB**: A NoSQL database for managing user accounts, URLs, and visit analytics.
- **JWT (JSON Web Tokens)**: For secure, token-based user authentication.
- **EJS**: Templating engine for rendering interactive HTML pages.
- 
![ScreenShot](https://github.com/shreyas-kapse/url-shortner/blob/main/screenshots/homePage.png?raw=true)

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or cloud instance)
- Express.js (v4.21+)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shreyas-kapse/url-shortner.git
   cd url-shortener
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Environment Variables: Create a `.env` file in the root directory and configure it with your MongoDB URI and JWT secret.

   ```plaintext
   MONGODB_URI=your_mongo_uri
   SECRET=your_jwt_secret
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Access the application at [http://localhost:8001](http://localhost:8001).

## Usage

- **Sign Up and Login**: Users can create an account and securely log in.
- **URL Shortening**: Input a long URL to generate a short 8-character link.
- **Analytics**: Monitor usage for each URL with timestamps and access data stored in MongoDB.

## Project Structure

- `/models`: MongoDB schemas for user and URL data.
- `/controllers`: Core business logic for authentication, URL handling, and analytics.
- `/routes`: API endpoints for login, signup, and URL management.
- `/views`: EJS templates for the frontend interface.

## Future Enhancements

- Advanced analytics for deeper URL usage insights
- Customizable short link aliases
- Enhanced user account management features

## Contribution

We welcome contributions! Fork this repository and submit a pull request for review.

## License

This project is licensed under the MIT License.
