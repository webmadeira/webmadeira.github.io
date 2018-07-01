# Get started

## Development mode
To launch this project in development mode you'll need to run:  
`npm start`

## Production mode
To deploy this project to production you'll need to:  
`npm run build`

# Setup
This project uses the following tools for development and build for production.

- [Webpack](https://webpack.js.org/) and [webpack-dev-server](https://github.com/webpack/webpack-dev-server) for bundling and providing a development static server
- Hot module replacement for faster development and debugging
- Ecmascript latest
- [Babel](https://babeljs.io/) along with [babel-plugin-transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/) for supporting class properties
- [Jest](https://facebook.github.io/jest/) along with [enzyme](https://github.com/airbnb/enzyme) for unit and integration tests
- [ESLint](https://eslint.org/) along with [airbnb rules](https://www.npmjs.com/package/eslint-config-airbnb) for JS linting
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) along with [commitizen](https://github.com/commitizen/cz-cli) for changelog automatic generation

# Tech stack

Several packages were used for this development. But the most important ones would be the following:

- [ReactJS](https://reactjs.org/) for building dynamic UI
- [Redux](https://redux.js.org/docs/introduction/) for state management
- [Proptypes](https://reactjs.org/docs/typechecking-with-proptypes.html) for type checking on each component's properties
- [styled-components](https://www.styled-components.com/) for styling

# Tests 
To run unit and integration tests, you'll need to run:  
`npm test`

To check the project's test coverage, you'll need to run:  
`npm test -- --coverage` - this will print the coverage report in the terminal

# Changelog generation
Every project should have a changelog so every one can have an understanding about the project's evolution at each version.  
For that we have [commitizen](https://github.com/commitizen/cz-cli) along with [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) to automatically generate a changelog from the project's history.

To generate the changelog file you'll  need to run:  
`npm run changelog`