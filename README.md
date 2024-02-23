# Event Wishes _ FRONT

This React application is designed to manage a list of service providers. It utilizes Material-UI components for the user interface and makes HTTP requests to a backend to retrieve and add data about service providers.

## Prerequisites

Before you can run this application locally, ensure you have the following installed:

- Node.js
- npm (Node.js package manager)

## Installation

1. Clone this repository to your local machine.
2. In the project's root directory, run the following command to install dependencies:

   ```bash
   npm install
   ```

## Configuration

Before starting the application, you need to configure the backend API URL. To do this, create a `.env` file in the project's root directory and add the following environment variable:

   ```
   REACT_APP_BFF_URL=https://your-api-url.com/
   ```

   Make sure to replace `https://your-api-url.com/` with your backend API URL.

## Usage

Once installation and configuration are complete, you can start the application by running the following command:

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000) in your browser.

### Running with Docker

To run the application using Docker, you can build the Docker image and then run a container using the following commands:

```bash
docker build -t my-react-app .
docker run -p 3000:3000 my-react-app
```