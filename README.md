# React-Portfolio-Website
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

* [Project Overview](#project-overview)
* [Available Scripts](#available-scripts)
  * [yarn start](#yarn-start)
  * [yarn test](#yarn-test)
  * [yarn run ios](#yarn-run-ios)
  * [yarn run android](#yarn-run-android)
  * [yarn run eject](#yarn-run-eject)
* [Environment Variables](#environment-variables)
  * [API Keys](#api-keys)
* [Learn More](#learn-more)
  
  
## Project Overview

This website was built with a backend server that uses [Node.js](https://nodejs.org/en/about/) + [Express](https://expressjs.com/) for REST APIs and a front-end side that uses the [React Framework](https://reactjs.org/) with [React Router](https://reacttraining.com/react-router/) & [Axios](https://www.npmjs.com/package/axios). The 'Contact' page implements the [SendGrid](https://sendgrid.com/docs/) API for sending emails seamlessly to the host.

The purpose of creating this was to organize some of my projects and showcase some of my skills. Feel free to use this as a starting point to customize your own unique portfolio.
   
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Environment Variables

I have included an .env-sample file that should be renamed to .env and contain variables that you would like to remain secret, such as API keys. 

### API Keys

I used the .env file to store my SendGrid API so that I can then access it from anywhere in my application by calling 'process.env.REACT_APP_SENDGRID_API_KEY'. Simply replace 'YOUR_API_KEY_HERE' with your own SendGrid API key.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
