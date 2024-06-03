# Getting Started with Create React App

### Project url: https://react-jira-issue-byo1nybxa-deepakkokanes-projects.vercel.app/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

# Jira Issues App

This is a React application that connects to Jira's REST API and lists all issues for a specific project.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd jira-issues-app
   npm install
   npm run build
   cd proxy-server
   npm install
   npm start
   visit: http://localhost:4000
   ```

## Approach

1. Used create-react-app to set up the project.
2. Utilized axios for making API requests.
3. Managed state using React hooks (useState, useEffect).
4. Styled the application with basic CSS.
5. Implemented error handling and loading states
6. Served react app using nodejs to avoid CORS issue
